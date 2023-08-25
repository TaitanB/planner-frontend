import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdCalendarMonth } from 'react-icons/md';

function MyDatePicker({ selectedPeriod, setPlannedDate }) {
  const [selectedDate, setSelectedDate] = useState(null);

  // console.log(selectedPeriod, selectedDate);

  useEffect(() => {
    selectedPeriod !== 'date' && setSelectedDate(null);
  }, [selectedPeriod]);

  return (
    <div
      className={`d-flex gap-1 align-items-center ${
        selectedPeriod === 'date' && 'text-primary'
      }`}
    >
      <MdCalendarMonth />
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
          setPlannedDate(date);
        }}
        className="w-100 text-center"
      />
    </div>
  );
}

export default MyDatePicker;
