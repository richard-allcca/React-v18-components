import './App.css';
import CountdownVanilla from './components/Count-down-cup-america/CountDown-vanilla/CountDownVanilla';
import FaceFinal from './components/Face-final/FaceFinal';
import Table from './components/Table-groups-cup-america/Table';

function App() {

  return (
    <>
      {/* <Slider/> */}
      {/* <Table/> */}
      {/* <CountdownMoment targetDate="2024-05-19T00:00:00-05:00" /> */}
      <CountdownVanilla limiteDate='22 may 2024, 15:00:00' />
      {/* <FaceFinal/> */}
    </>
  );
}

export default App;
