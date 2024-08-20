import { useState } from "react";

export interface TimeSlot {
  id: number;
  period: number;
  start: string;
  end: string;
}

export interface Timetable {
  morning: TimeSlot[];
  afternoon: TimeSlot[];
  evening: TimeSlot[];
}

const MAX_SLOTS = 5;

const useTimetable = () => {
  const [timetable, setTimetable] = useState<Timetable>({
    morning: [],
    afternoon: [],
    evening: [],
  });

  const sortAndAdjustPeriods = (slots: TimeSlot[], startPeriod: number) => {
    return slots
      .sort((a, b) => (a.start < b.start ? -1 : 1))
      .map((slot, index) => ({
        ...slot,
        period: startPeriod + index,
      }));
  };

  const shiftSlots = (
    fromSlots: TimeSlot[],
    toSlots: TimeSlot[],
    fromStartPeriod: number,
    toStartPeriod: number
  ) => {
    if (fromSlots.length > MAX_SLOTS) {
      toSlots = [...fromSlots.splice(MAX_SLOTS), ...toSlots];
      fromSlots = sortAndAdjustPeriods(fromSlots, fromStartPeriod);
      toSlots = sortAndAdjustPeriods(toSlots, toStartPeriod);
    }
    return { fromSlots, toSlots };
  };

  const updateTimetableAfterChange = (updatedTimetable: Timetable) => {
    let morningSlots = sortAndAdjustPeriods(updatedTimetable.morning, 1);
    let afternoonSlots = sortAndAdjustPeriods(
      updatedTimetable.afternoon,
      morningSlots.length + 1
    );
    let eveningSlots = sortAndAdjustPeriods(
      updatedTimetable.evening,
      morningSlots.length + afternoonSlots.length + 1
    );

    ({ fromSlots: morningSlots, toSlots: afternoonSlots } = shiftSlots(
      morningSlots,
      afternoonSlots,
      1,
      morningSlots.length + 1
    ));
    ({ fromSlots: afternoonSlots, toSlots: eveningSlots } = shiftSlots(
      afternoonSlots,
      eveningSlots,
      morningSlots.length + 1,
      morningSlots.length + afternoonSlots.length + 1
    ));

    return {
      morning: morningSlots,
      afternoon: afternoonSlots,
      evening: eveningSlots,
    };
  };

  const addTimeSlot = (period: keyof Timetable, slot: TimeSlot) => {
    setTimetable((prev) => {
      const updatedPeriodSlots = [...prev[period], slot];
      if (updatedPeriodSlots.length > MAX_SLOTS) {
        return prev;
      }

      const updatedTimetable = {
        ...prev,
        [period]: updatedPeriodSlots,
      };

      return updateTimetableAfterChange(updatedTimetable);
    });
  };

  const moveSlotIfNecessary = (
    fromPeriod: keyof Timetable,
    toPeriod: keyof Timetable,
    updatedTimetable: Timetable
  ) => {
    const fromSlots = updatedTimetable[fromPeriod];
    const toSlots = updatedTimetable[toPeriod];

    if (fromSlots.length < MAX_SLOTS && toSlots.length > 0) {
      const [movedSlot, ...rest] = toSlots;
      return {
        ...updatedTimetable,
        [fromPeriod]: [...fromSlots, movedSlot],
        [toPeriod]: rest,
      };
    }

    return updatedTimetable;
  };

  const removeTimeSlot = (period: keyof Timetable, id: number) => {
    setTimetable((prev) => {
      let updatedTimetable = {
        ...prev,
        [period]: prev[period].filter((slot) => slot.id !== id),
      };

      if (period === "morning") {
        updatedTimetable = moveSlotIfNecessary(
          "morning",
          "afternoon",
          updatedTimetable
        );
      }

      if (period === "afternoon") {
        updatedTimetable = moveSlotIfNecessary(
          "afternoon",
          "evening",
          updatedTimetable
        );
      }

      return updateTimetableAfterChange(updatedTimetable);
    });
  };

  const updateTimeSlot = (
    period: keyof Timetable,
    id: number,
    start: string,
    end: string
  ) => {
    setTimetable((prev) => {
      const updatedPeriodSlots = prev[period].map((slot) =>
        slot.id === id ? { ...slot, start, end } : slot
      );

      const updatedTimetable = {
        ...prev,
        [period]: updatedPeriodSlots,
      };

      return updateTimetableAfterChange(updatedTimetable);
    });
  };

  return {
    timetable,
    addTimeSlot,
    removeTimeSlot,
    updateTimeSlot,
  };
};

export default useTimetable;
