import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import MyDatePicker from '../../utils/MyDatePicker';
import { Periods } from '../../constants/constants';
import { getPlannedDate } from '../../helpers/getPlannedDate';

export default function PeriodsDate({
  plannedDate,
  setPlannedDate,
  selectedPeriod,
  setSelectedPeriod,
}) {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-wrap gap-3 align-items-center">
      {Periods.map(text => (
        <Form.Check
          style={{ width: '122px' }}
          key={`${t(text)}`}
          checked={selectedPeriod === text}
          label={`${t(text)}`}
          name="plannedDate"
          type="radio"
          id={`inline-radio-${text}`}
          onChange={() => {
            setSelectedPeriod(text);
            setPlannedDate(getPlannedDate({ text, plannedDate }));
          }}
        />
      ))}
      <Form.Label>
        <Form.Check
          key="date"
          checked={selectedPeriod === 'date'}
          inline
          name="plannedDate"
          type="radio"
          className="btn-check"
          id="inline-radio-date"
          onChange={() => {
            const text = 'date';
            setSelectedPeriod(text);
            setPlannedDate(getPlannedDate({ text, plannedDate }));
          }}
        />
        <MyDatePicker
          selectedPeriod={selectedPeriod}
          setPlannedDate={setPlannedDate}
        />
      </Form.Label>
    </div>
  );
}
