import React, { useState } from "react";
import { toast, Slide } from "react-toastify";
import {
  TimetableContainer,
  PeriodSection,
  AddButton,
  PeriodsWrapper,
  PeriodTop,
  EmptySlot,
} from "./Timetable.style";
import useTimetable from "../../hooks/useTimetable";
import TimeSlot from "../TimeSlot/TimeSlot";
import Modal from "../Modal/Modal";

const Timetable: React.FC = () => {
  const { timetable, addTimeSlot, removeTimeSlot, updateTimeSlot } =
    useTimetable();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlot, setCurrentSlot] = useState<{
    period: keyof typeof timetable;
    id: number | null;
  }>({ period: "morning", id: null });

  const handleAddTimeSlot = (period: keyof typeof timetable) => {
    if (timetable[period].length >= 5) {
      toast.error("최대 5개까지 추가할 수 있습니다.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
      });
      return;
    } else {
      addTimeSlot(period, {
        id: Date.now(),
        period: timetable[period].length + 1,
        start: "00:00",
        end: "00:00",
      });
    }
  };

  const handleRemoveTimeSlot = (period: keyof typeof timetable, id: number) => {
    setCurrentSlot({ period, id });
    setModalOpen(true);
  };

  const confirmRemoveTimeSlot = () => {
    if (currentSlot.id !== null)
      removeTimeSlot(currentSlot.period, currentSlot.id);
    setModalOpen(false);
  };

  const handleTimeChange = (
    period: keyof typeof timetable,
    id: number,
    start: string,
    end: string
  ) => {
    updateTimeSlot(period, id, start, end);
  };

  return (
    <TimetableContainer>
      <PeriodsWrapper>
        {Object.keys(timetable).map((period) => (
          <PeriodSection key={period}>
            <PeriodTop>
              <span className="period-text">
                {period === "morning"
                  ? "오전"
                  : period === "afternoon"
                  ? "오후"
                  : "저녁"}
              </span>
              <span className="time-text">
                {period === "morning"
                  ? "(~12:00)"
                  : period === "afternoon"
                  ? "(13:00~)"
                  : "(19:00~)"}
              </span>
            </PeriodTop>

            {[...Array(5)].map((_, index) => (
              <div key={index} className="slot-container">
                {timetable[period as keyof typeof timetable][index] ? (
                  <TimeSlot
                    key={timetable[period as keyof typeof timetable][index].id}
                    start={
                      timetable[period as keyof typeof timetable][index].start
                    }
                    end={timetable[period as keyof typeof timetable][index].end}
                    period={
                      timetable[period as keyof typeof timetable][index].period
                    }
                    onDelete={() =>
                      handleRemoveTimeSlot(
                        period as keyof typeof timetable,
                        timetable[period as keyof typeof timetable][index].id
                      )
                    }
                    onTimeChange={(start, end) =>
                      handleTimeChange(
                        period as keyof typeof timetable,
                        timetable[period as keyof typeof timetable][index].id,
                        start,
                        end
                      )
                    }
                  />
                ) : (
                  <EmptySlot />
                )}
              </div>
            ))}

            <AddButton
              onClick={() =>
                handleAddTimeSlot(period as keyof typeof timetable)
              }
            >
              +{" "}
              {period === "morning"
                ? "오전"
                : period === "afternoon"
                ? "오후"
                : "저녁"}{" "}
              교시 추가
            </AddButton>
          </PeriodSection>
        ))}
      </PeriodsWrapper>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={confirmRemoveTimeSlot}
      >
        삭제하시겠습니까?
      </Modal>
    </TimetableContainer>
  );
};

export default Timetable;
