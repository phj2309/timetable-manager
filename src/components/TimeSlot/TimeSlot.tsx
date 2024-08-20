import React from "react";
import {
  TimeSlotContainer,
  DeleteButton,
  TimePickerWrapper,
  TextSize,
} from "./TimeSlot.style";
import Select from "react-select";
import { FiClock } from "react-icons/fi";

interface TimeSlotProps {
  start: string;
  end: string;
  period: number;
  onDelete: () => void;
  onTimeChange: (start: string, end: string) => void;
}

const generateOptions = (limit: number) => {
  return Array.from({ length: limit + 1 }, (_, i) => {
    const value = i < 10 ? `0${i}` : `${i}`;
    return { value, label: value };
  });
};

const hourOptions = generateOptions(24);
const minuteOptions = generateOptions(59);

const TimeSlot: React.FC<TimeSlotProps> = ({
  start,
  end,
  period,
  onDelete,
  onTimeChange,
}) => {
  const [startHour, startMinute] = start.split(":");
  const [endHour, endMinute] = end.split(":");

  const handleTimeChange = (
    type: "start" | "end",
    timeType: "hour" | "minute",
    value: string
  ) => {
    const newStart =
      type === "start"
        ? `${timeType === "hour" ? value : startHour}:${
            timeType === "minute" ? value : startMinute
          }`
        : start;

    const newEnd =
      type === "end"
        ? `${timeType === "hour" ? value : endHour}:${
            timeType === "minute" ? value : endMinute
          }`
        : end;

    onTimeChange(newStart, newEnd);
  };

  const renderTimeSelect = (
    type: "start" | "end",
    timeType: "hour" | "minute",
    options: any[],
    selectedValue: string
  ) => (
    <Select
      options={options}
      value={{ value: selectedValue, label: selectedValue }}
      onChange={(selectedOption) => {
        if (selectedOption) {
          handleTimeChange(type, timeType, selectedOption.value);
        }
      }}
      classNamePrefix="react-select"
    />
  );

  return (
    <TimeSlotContainer>
      <TextSize>{`${period}교시`}</TextSize>

      <TimePickerWrapper>
        {renderTimeSelect("start", "hour", hourOptions, startHour)}
        <TextSize>:</TextSize>
        {renderTimeSelect("start", "minute", minuteOptions, startMinute)}
        <FiClock />
      </TimePickerWrapper>
      <TextSize>-</TextSize>
      <TimePickerWrapper>
        {renderTimeSelect("end", "hour", hourOptions, endHour)}
        <TextSize>:</TextSize>
        {renderTimeSelect("end", "minute", minuteOptions, endMinute)}
        <FiClock />
      </TimePickerWrapper>

      <DeleteButton onClick={onDelete}>삭제</DeleteButton>
    </TimeSlotContainer>
  );
};

export default TimeSlot;
