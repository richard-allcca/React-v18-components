import { useState } from "react";
import './Items.css'

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

const Items = () => {
	const [ activeCard, setActiveCard ] = useState(0);

  const handleClickSmallCard = (index, event) => {
		event.preventDefault()
		setActiveCard(index)
		// scrollToCard(index)
	}

  const getCards = listImagesConfig.map((el, index) => {
		const isActive = index === activeCard;
		return (
			<a
				// href={ `#img${index}` }
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
    <div className="cards-ctn">
      {getCards}
    </div>
  )
}

export default Items