import './FaceFinal.css';
import useWindowSize from './../../hooks/useWindowSize';

// eslint-disable-next-line react/prop-types
const Block = ({ side, blockNumber }) => {
  const { isMobileFaceFinal } = useWindowSize();

  const detailsClass = `details-block${blockNumber}-${side}`;
  const teamsClass = `teams-block${blockNumber}-${side}`;

  const getDetails = () => {
    if (isMobileFaceFinal) return null;
    return (
      <div className={ detailsClass }>
        <p className="date" >Vie 27, Jun</p>
        <p className="hour" >21:30 Hs</p>
      </div>
    );
  };

  const getBlockTeams = () => {
    if (isMobileFaceFinal && blockNumber === 2) {
      return <div>🔘</div>;
    }
    return (
      <div className={ teamsClass }>
        <p className="team1" >🏳️‍⚧️ ARG | 1</p>
        <p className="team2" >🏳️‍⚧️ ARG | 1</p>
      </div>
    );
  };

  return (
    <div className={ `inner-${side}-block${blockNumber}` }>
      { getDetails() }
      { getBlockTeams() }
    </div>
  );
};

const FaceFinal = () => {
  const teamGroup = [ 1, 2, 3 ];

  const getBlockLeft = () => {
    return teamGroup.map(blockNumber => <Block side="left" blockNumber={ blockNumber } key={ blockNumber } />);
  };

  const getBlockRight = () => {
    return teamGroup.map(blockNumber => <Block side="right" blockNumber={ blockNumber } key={ blockNumber } />);
  };

  return (
    <div className='wrapper-final-face'>

      <div className='ctn-block-left'>
        <div className='left-block'>
          { getBlockLeft() }
        </div>
      </div>

      <div className='ctn-block-right'>
        <div className='right-block'>
          { getBlockRight() }
        </div>
      </div>

    </div>
  );
};


export default FaceFinal;