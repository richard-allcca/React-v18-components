import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function getBrowserTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

const CountdownVanilla = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const timezone = getBrowserTimezone(); // Obtener la zona horaria del navegador

  useEffect(() => {
    const targetDateObj = new Date(targetDate);
    const now = new Date();

    // Convertir la fecha objetivo y la hora actual a la zona horaria del navegador
    const targetDateInUserTZ = new Date(targetDateObj.toLocaleString("en-US", { timeZone: timezone }));
    const nowInUserTZ = new Date(now.toLocaleString("en-US", { timeZone: timezone }));

    const diffInMilliseconds = targetDateInUserTZ.getTime() - nowInUserTZ.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

    const seconds = Math.floor(diffInSeconds % 60);
    const minutes = Math.floor((diffInSeconds / 60) % 60);
    const hours = Math.floor((diffInSeconds / 3600) % 24);
    const days = Math.floor(diffInSeconds / (3600 * 24));

    setTimeLeft({ days, hours, minutes, seconds });

    const intervalId = setInterval(() => {
      const now = new Date();
      const targetDateObj = new Date(targetDate);

      const nowInUserTZ = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
      const targetDateInUserTZ = new Date(targetDateObj.toLocaleString("en-US", { timeZone: timezone }));

      const diffInMilliseconds = targetDateInUserTZ.getTime() - nowInUserTZ.getTime();
      const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

      const seconds = Math.floor(diffInSeconds % 60);
      const minutes = Math.floor((diffInSeconds / 60) % 60);
      const hours = Math.floor((diffInSeconds / 3600) % 24);
      const days = Math.floor(diffInSeconds / (3600 * 24));

      setTimeLeft({ days, hours, minutes, seconds });

      if (nowInUserTZ >= targetDateInUserTZ) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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


CountdownVanilla.propTypes = {
  targetDate: PropTypes.string.isRequired,
};

export default CountdownVanilla;
