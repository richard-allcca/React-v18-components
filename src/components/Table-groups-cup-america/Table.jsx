import useWindowSize from '../../hooks/useWindowSize';
import './Table.css';
import CheckIcon from './children/CheckIcon';
import FailIcon from './children/FailIcon';

const Table = () => {
  const {
    isDesktop, isMobile, isTablet
  } = useWindowSize();
  return (
    <div className='ctn'>
      <div className="title-table">
        <p className='title' >Grupo <b>A</b></p>
        <span className='separator' ></span>
        <div className='ad'>{ `100x40px` }</div>
      </div>

      <div className="wrapper-table">
        <div className='t-head-contain'>
          <div className="t-head-country">País</div>
          <div className='t-head-values' >
            <div className="PTS">PTS</div>
            <div className="PJ">Partidos jugados</div>
            <div className="PG">PG</div>
            <div className="PE">PE</div>
            <div className="PP">PP</div>
            <div className="DIF">DIF</div>
            <div className="GC">GC</div>
            <div className="GF">GF</div>
          </div>
        </div>
        <div className='t-body-contain'>
          <div className="t-body-country">
            <div className='t-body-country-logo' >⚽</div>
            <p className='t-body-country-name' >
              {isMobile ? 'ARG' : 'Argentina'}
            </p>
          </div>
          <div className="t-body-values" >
            <div className="row-pts">00</div>
            <div className="row-pj">
              <div className='pj-1'><CheckIcon/></div>
              <div className='pj-2'><CheckIcon/></div>
              <div className='pj-3'><FailIcon/></div>
            </div>
            <div className="row-pg">00</div>
            <div className="row-pe">00</div>
            <div className="row-pp">00</div>
            <div className="row-dif">00</div>
            <div className="row-gc">00</div>
            <div className="row-gf">00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;