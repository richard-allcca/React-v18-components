import { useEffect, useState } from "react";
import SliderCursorMove from "../SliderCursorMove/SliderCursorMove";
import './Slider.css'
import ArrowIcon from './../../assets/ArrowIcon';

const listImagesConfig = [
  {
    href: "#uk",
    ariaHidded: true,
    src: "assets/uk.png",
    alt: "uk",
    amount: 12150.25,
    currency: "British Pound",
  },
  {
    href: "#usa",
    ariaHidded: true,
    src: "assets/usa.png",
    alt: "us",
    amount: 12150.25,
    currency: "US Dollar",
  },
  {
    href: "#eu",
    ariaHidded: true,
    src: "assets/eu.png",
    alt: "eu",
    amount: 12150.25,
    currency: "Euro",
  },
  {
    href: "#cz",
    ariaHidded: true,
    src: "assets/cz.png",
    alt: "cz",
    amount: 12150.25,
    currency: "Czech koruma",
  },
  {
    href: "#chf",
    ariaHidded: true,
    src: "assets/chf.png",
    alt: "chf",
    amount: 12150.25,
    currency: "Swiss franc",
  },
  {
    href: "#cz1",
    ariaHidded: true,
    src: "assets/cz1.png",
    alt: "cz1",
    amount: 12150.25,
    currency: "Czech koruma",
  },
  {
    href: "#chf2",
    ariaHidded: true,
    src: "assets/chf2.png",
    alt: "chf2",
    amount: 12150.25,
    currency: "Swiss franc",
  },
];

const Slider = () => {
  const [ activeCard, setActiveCard ] = useState(0);

  const scrollToCard = (index) => {
    const targetCard = document.getElementById(`img${index}`);
    const targetCardSmall = document.getElementById(`imgSmall${index}`);
    targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setTimeout(() => {
      targetCardSmall.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }, 1100);
  };

  useEffect(() => {
    scrollToCard(0);
  }, []);

  const handleClickNext = () => {

    if (activeCard >= listImagesConfig.length - 1) return null;

    setActiveCard(prevCard => {
      const nextCard = prevCard + 1;
      scrollToCard(nextCard);
      return nextCard;
    });
  };

  const handleClickPrev = () => {
    if (activeCard <= 0) return null;

    setActiveCard(prevCard => {
      const prevCardIndex = prevCard - 1;
      scrollToCard(prevCardIndex);
      return prevCardIndex;
    });
  };

  const getCards = listImagesConfig.map((el, index) => {
    const isActive = index === activeCard;
    return (
      <a
        href={ `#img${index}` }
        className={ `card ${isActive ? 'active' : ''}` }
        key={ index }
        id={ `img${index}` }
        alt={ el.alt }
      >
        <div>
          <h2 role="presentation">{ el.amount }</h2>
          <div className="currency">{ el.currency }</div>
        </div>
      </a>
    );
  });

  return (
    <>
      <div className="slider-ctn">
        <button
          onClick={ handleClickPrev }
          type="button"
          className="arrow-button--prev arrow-button"
        >
          <ArrowIcon />
        </button>

        <div
          className="cards-ctn"
        >
          { getCards }
        </div>

        <button
          onClick={ handleClickNext }
          type="button"
          className="arrow-button--next arrow-button"
        >
          <ArrowIcon />
        </button>
      </div>

      <SliderCursorMove
        activeCard={ activeCard }
        setActiveCard={ setActiveCard }
        list={ listImagesConfig }
        scrollToCard={ scrollToCard }
      />
    </>
  );
};

export default Slider;