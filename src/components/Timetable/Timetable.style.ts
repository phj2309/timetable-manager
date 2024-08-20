import styled from "styled-components";

export const TimetableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

export const PeriodsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`;

export const PeriodSection = styled.div`
  display: flex;
  position: relative;
  width: 32%;
  height: 300px;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  background-color: ${(props) => props.theme.colors.white};

  @media (max-width: 768px) {
    width: 45%;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  .slot-container {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const PeriodTop = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  background-color: ${(props) => props.theme.colors.lightGray};
  font-size: 12px;
  line-height: 35px;

  .period-text {
    color: ${(props) => props.theme.colors.black};
  }

  .time-text {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const AddButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.colors.black};
  font-size: 12px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray};
  }
`;

export const EmptySlot = styled.div`
  width: 100%;
  height: 100%;
`;
