import './App.css';
import { MAP_JSON } from './components/React-simple-map/constants';
import MapArgentina from './components/React-simple-map/MapArgentina';
import Slider from './components/Slider/Slider';
import PreviewComponent from './components/TestComponent/PreviewComponent';

function App() {
  return (
    <div>
      <Slider/>
      {/* <VideoPlayer videoData={videoData} /> */}
      {/* <AppYt /> */}
      {/* <h1>titulo</h1> */}
      {/* <MapArgentina
        data={{
          map: MAP_JSON,
          width: 600,
          height: 600,
          center: [-62, -40],
          scale: 420,
          currency: "$"
        }}
      /> */}
      {/* <PreviewComponent /> */}
    </div>
  );
}

export default App;
