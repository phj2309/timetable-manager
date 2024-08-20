import React from "react";
import { PageContainer } from "./TimetablePage.style";
import Timetable from "../../components/Timetable/Timetable";

const TimetablePage: React.FC = () => {
  return (
    <PageContainer>
      <h1>Timetable</h1>
      <Timetable />
    </PageContainer>
  );
};

export default TimetablePage;
