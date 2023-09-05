export const getPlannedDate = ({ text, plannedDate }) => {
  const currentDate = new Date();
  let date;

  console.log(currentDate);
  console.log(plannedDate);

  switch (text) {
    case 'week':
      date = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
      break;

    case 'month':
      date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      );
      break;

    case '3_months':
      date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 3,
        currentDate.getDate()
      );
      break;

    case 'half_year':
      date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 6,
        currentDate.getDate()
      );
      break;

    case 'year':
      date = new Date(
        currentDate.getFullYear() + 1,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      break;

    case '3_years':
      date = new Date(
        currentDate.getFullYear() + 3,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      break;

    case '5_years':
      date = new Date(
        currentDate.getFullYear() + 5,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      break;

    case 'date':
      date = plannedDate;
      break;

    default:
      break;
  }

  console.log(date);

  // Отримання поточної дати у форматі UTC
  // const currentDate = new Date();
  const utcDate = new Date(currentDate.toUTCString());

  // Функція для форматування дати у "дд.мм.рррр" формат
  function formatDateToDDMMYYYY(date) {
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Додаємо 1, так як місяці в JavaScript ідуть від 0 до 11
    const year = date.getUTCFullYear();

    // Перевірка, чи день і місяць складаються з однієї цифри, і додавання 0 спереду при необхідності
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
  }

  const formattedDate = formatDateToDDMMYYYY(utcDate);

  console.log(formattedDate); // Виведе дату у форматі "дд.мм.рррр"

  return date;
};
