import { useEffect, useRef, useState } from 'react';
import { getBrowserTimezone, getCurrentTimeInMilliseconds } from '../utilities';
import PropTypes from 'prop-types';

// import './styles/CountdownVanillaV2.css';
import './CountdownVanilla.css';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Guarda la última versión de la callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [ callback ]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [ delay ]);
}

const CountdownVanilla = ({ limiteDate }) => {
  const [ timeLeft, setTimeLeft ] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const timezone = getBrowserTimezone();
  const nowMilliseconds = getCurrentTimeInMilliseconds(timezone);

  useInterval(() => {
    const countdownDate = new Date(limiteDate).getTime();
    const dayInMilliseconds = 1000 * 60 * 60 * 24;
    const hourInMilliseconds = 1000 * 60 * 60;
    const secondInMilliseconds = 1000 * 60;
    let now = nowMilliseconds;
    let limitTime = countdownDate - now;

    if (limitTime <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const days = Math.floor(limitTime / (dayInMilliseconds));
      const hours = Math.floor((limitTime % (dayInMilliseconds)) / (hourInMilliseconds));
      const minutes = Math.floor((limitTime % (hourInMilliseconds)) / (secondInMilliseconds));
      const seconds = Math.floor((limitTime % (secondInMilliseconds)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      setTimeLeft(prevState => ({
        ...prevState,
        days: Math.floor(limitTime / (dayInMilliseconds)),
        hours: Math.floor((limitTime % (dayInMilliseconds)) / (hourInMilliseconds)),
        minutes: Math.floor((limitTime % (hourInMilliseconds)) / (secondInMilliseconds)),
        seconds: Math.floor((limitTime % (secondInMilliseconds)) / 1000),
      }));
    }
  }, 1000);

  return (
    <div className='wrapper-countdown'>
      <div className='ctn-title' >
        <p>copa américa - usa 2024</p>
        <p>Desde el 20 de Junio al 14 de Julio</p>
      </div>

      <div className='ctn-dates' >
        <div className='dates' >
          <p className='day' >
            { timeLeft.days.toString().padStart(2, '0') }
          </p>
          <p className='hour' >
            { timeLeft.hours.toString().padStart(2, '0') }
          </p>
          <p className='minute' >
            { timeLeft.minutes.toString().padStart(2, '0') }
          </p>
          <p className='second' >
            { timeLeft.seconds.toString().padStart(2, '0') }
          </p>
        </div>
        <div className='labels'>
          <p>Días</p>
          <p>HS</p>
          <p>MIN</p>
          <p>SEG</p>
        </div>
      </div>

      <div className='ctn-ads' >
        <div className='ad1'>ADD</div>
        <div className='ad2'>ADD</div>
      </div>

    </div>
  );
};

CountdownVanilla.propTypes = {
  limiteDate: PropTypes.string.isRequired,
};

export default CountdownVanilla;
