import { useState, useRef } from 'react';
import SmallCard from './small-card/SmallCard';
import PropTypes from 'prop-types';

import './SliderCursorMove.css';


const SliderCursorMove = ({ activeCard, list, scrollToCard, setActiveCard }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la sensibilidad según sea necesario
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={sliderRef}
      className="slider"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <SmallCard
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        list={list}
        scrollToCard={scrollToCard}
      />
    </div>
  );
};

export default SliderCursorMove;

SliderCursorMove.propTypes = {
  activeCard: PropTypes.number,
  list: PropTypes.array,
  scrollToCard: PropTypes.func,
  setActiveCard: PropTypes.func,
};
