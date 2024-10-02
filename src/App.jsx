import './App.css';
import videoData from '../src/components/JwPlayer/videoData.json';
import VideoPlayer from './components/JwPlayer/VideoPlayer';

function App() {

  return (
    <>
      {/* <Slider/> */}
      <VideoPlayer videoData={videoData} />
    </>
  );
}

export default App;
