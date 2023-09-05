import React, { useState, useEffect, useContext } from 'react';

import { LanguageContext } from 'utils/LanguageContext';
import useMobileStyle from '../hooks/useMobileStyle';

import { MdCalendarMonth } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import { uk, enUS } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker({ selectedPeriod, setPlannedDate }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const isMobileStyle = useMobileStyle();
  const { currentLanguage } = useContext(LanguageContext);

  const { t } = useTranslation();

  registerLocale('ua', uk);
  registerLocale('en', enUS);

  setDefaultLocale(currentLanguage);

  useEffect(() => {
    selectedPeriod !== 'date' && setSelectedDate(null);
  }, [selectedPeriod]);

  const dayClassName = date => {
    const today = new Date();
    // console.log(selectedDate, date);
    if (date.toDateString() === today.toDateString()) {
      return 'bg-primary text-white rounded'; // Стилі для поточної дати
    }

    if (selectedDate && selectedDate.toDateString() === date.toDateString()) {
      return 'text-white'; // Стилі для обраної дати
    }

    if (date < today) {
      return 'text-body-tertiary'; // Стилі для дат до поточної дати
    }

    if (date.getMonth() === today.getMonth()) {
      return 'text-primary rounded'; // Стилі для поточного місяця
    }

    if (date > today) {
      return 'text-secondary'; // Стилі для наступних місяців
    }

    return 'text-body-secondary'; // Стилі за замовчуванням
  };

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
        dateFormat="dd.MM.yyyy"
        calendarClassName="bg-body-tertiary"
        dayClassName={dayClassName}
        popperPlacement="top-end"
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [5, 10],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              rootBoundary: 'viewport',
              tether: false,
              altAxis: true,
            },
          },
        ]}
        locale={currentLanguage}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        closeOnScroll={true}
        placeholderText={t('select_date')}
        minDate={new Date()}
        withPortal={isMobileStyle}
        fixedHeight
      />
    </div>
  );
}

export default MyDatePicker;
