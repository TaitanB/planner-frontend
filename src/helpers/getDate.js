export const getDate = date => {
  if (date) {
    const [year, month, day] = date.slice(0, 10).split('-');

    return `${day}.${month}.${year}`;
  }
};
