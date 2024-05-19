import './App.css';
import CountdownVanilla from './components/Count-down-cup-america/CountDown-vanilla/CountDownVanilla';
import Table from './components/Table-groups-cup-america/Table';

function App() {

  return (
    <>
      {/* <Slider/> */}
      {/* <Table/> */}
      {/* <CountdownMoment targetDate="2024-05-19T00:00:00-05:00" /> */}
      <CountdownVanilla limiteDate='20 may 2024, 15:00:00' />
    </>
  );
}

export default App;
