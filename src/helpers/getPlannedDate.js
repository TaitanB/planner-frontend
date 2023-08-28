export const getPlannedDate = ({ text, plannedDate }) => {
  const currentDate = new Date();
  let date;

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

  return date;
};
