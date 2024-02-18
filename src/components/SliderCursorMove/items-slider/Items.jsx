import './Items.css'
import PropTypes from 'prop-types';

const Items = ({ activeCard, list, scrollToCard, setActiveCard  }) => {

  const handleClickSmallCard = (index, event) => {
		event.preventDefault()
		setActiveCard(index)
		scrollToCard(index)
	}

	const getCardsSmall = () => {

		return list.map((el, index) => {
			const isActive = index === activeCard;
			return (
				<div
					href={ `#img${index}` }
					className={ `card-small ${isActive ? 'active' : ''}` }
					key={ index }
					id={ `imgSmall${index}` }
					alt={ el.alt }
					onClick={(event) => handleClickSmallCard(index, event)}
				>
					<div>
						<h2 role="presentation">{ el.amount }</h2>
						<div className="currency">{ el.currency }</div>
					</div>
				</div>
			);
		});
	};

  return (
    <div className="cards-small-ctn">
      {getCardsSmall()}
    </div>
  )
}

export default Items

Items.propTypes = {
  activeCard: PropTypes.number,
  list: PropTypes.array,
  scrollToCard: PropTypes.func,
  setActiveCard: PropTypes.func,
}