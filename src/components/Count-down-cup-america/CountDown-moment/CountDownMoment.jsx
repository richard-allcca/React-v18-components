import { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';

function getBrowserTimezone() {
  const timezoneOffset = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return timezoneOffset;
}

const CountdownMoment = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const timezone = getBrowserTimezone(); // Obtener la zona horaria del navegador

  useEffect(() => {
    const targetDateTime = moment.tz(targetDate, timezone); // Utilizar la zona horaria obtenida
    const now = moment();

    if (now.isBefore(targetDateTime)) {
      const diffInSeconds = targetDateTime.diff(now, 'seconds');

      const seconds = Math.floor(diffInSeconds % 60);
      const minutes = Math.floor((diffInSeconds / 60) % 60);
      const hours = Math.floor((diffInSeconds / 3600) % 24);
      const days = Math.floor(diffInSeconds / (3600 * 24));

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }

    const intervalId = setInterval(() => {
      const now = moment();
      const targetDateTime = moment.tz(targetDate, timezone);

      if (now.isAfter(targetDateTime)) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const diffInSeconds = targetDateTime.diff(now, 'seconds');
        const seconds = Math.floor(diffInSeconds % 60);
        const minutes = Math.floor((diffInSeconds / 60) % 60);
        const hours = Math.floor((diffInSeconds / 3600) % 24);
        const days = Math.floor(diffInSeconds / (3600 * 24));

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate, timezone]); // Asegúrate de incluir timezone en las dependencias

  return (
    <div>
      <p>{`Days: ${timeLeft.days}`}</p>
      <p>{`Hours: ${timeLeft.hours}`}</p>
      <p>{`Minutes: ${timeLeft.minutes}`}</p>
      <p>{`Seconds: ${timeLeft.seconds}`}</p>
    </div>
  );
};

CountdownMoment.propTypes = {
  targetDate: PropTypes.string.isRequired,
};

export default CountdownMoment;
