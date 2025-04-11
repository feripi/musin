import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = ({ classes }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classesForSelectedDate = classes.filter(
    (cls) => cls.date === selectedDate.toISOString().split("T")[0]
  );

  return (
    <div style={{ margin: "2rem auto", maxWidth: "500px", textAlign: "center" }}>
      <h2>Controle de Aulas</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <h3>Aulas para {selectedDate.toLocaleDateString()}:</h3>
      {classesForSelectedDate.length > 0 ? (
        <ul>
          {classesForSelectedDate.map((cls, index) => (
            <li key={index}>{cls.title}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma aula cadastrada para esta data.</p>
      )}
    </div>
  );
};

export default CalendarComponent;