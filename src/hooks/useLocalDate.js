import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

export default function useLocalDate(date) {
  const [localDate, setLocalDate] = useState(null);

  useEffect(() => {
    if (date) {
      const userTimezone = moment.tz.guess();
      const local = moment(date).tz(userTimezone).format('DD.MM.YYYY');

      setLocalDate(local);
    }
  }, [date]);

  return localDate;
}
