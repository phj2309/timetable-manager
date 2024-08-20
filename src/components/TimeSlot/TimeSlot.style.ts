import styled from "styled-components";

export const TimeSlotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin: 0;

  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
`;

export const DeleteButton = styled.button`
  background-color: ${(props) => props.theme.colors.red};
  border: none;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 10px;
  padding: 4px 8px;
  height: 100%;
  align-self: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.redHover};
  }
`;

export const TimePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.background};
  margin: 0 8px;
  padding-left: 3%;
  width: auto;
  position: relative;
  flex: 1;

  .react-select__control {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: none;
    background-color: transparent;
    height: 100%;
    min-height: 24px;
    padding: 0;
  }

  .react-select__value-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 100%;
  }

  .react-select__single-value {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: ${(props) => props.theme.colors.text};
    text-align: center;
    height: 100%;
    padding: 0px 1px;
    margin: 0;
  }

  .react-select__input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 0;
  }

  .react-select__indicator-separator,
  .react-select__dropdown-indicator {
    display: none;
  }

  .react-select__menu {
    min-width: 40px;
    left: 0;
    padding: 0;
    transform: translateX(-10%);
  }

  .react-select__menu-list {
    padding: 0;
    min-width: 40px;
    font-size: 12px;
  }

  .react-select__option {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.text};

    &.react-select__option--is-selected {
      background-color: ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.white};
    }
  }

  svg {
    position: absolute;
    right: 3px;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const TextSize = styled.div`
  font-size: 12px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
