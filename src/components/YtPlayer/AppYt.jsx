// src/App.js
import { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import Playlist from './Playlist';
import './AppYt.css';

const API_KEY = 'AIzaSyByn8MlSO-w4TLRerlr2JpiZJ5jQo_Ysv8'; // Reemplaza con tu clave de API
const PLAYLIST_ID = 'PLWYKfSbdsjJi4PHsrginqa9lzzlO8WB__'; // Reemplaza con tu ID de lista de reproducción

const AppYt = () => {
  const [currentVideo, setCurrentVideo] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const convertDuration = (duration) => {
    let match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    let hours = (parseInt(match[1]) || 0);
    let minutes = (parseInt(match[2]) || 0);
    let seconds = (parseInt(match[3]) || 0);
    return `${hours > 0 ? hours + ':' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${PLAYLIST_ID}&key=${API_KEY}&maxResults=10`)
      .then(response => response.json())
      .then(data => {
        const videoIds = data.items.map(item => item.contentDetails.videoId).join(',');
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoIds}&key=${API_KEY}`)
          .then(response => response.json())
          .then(videoData => {
            const videos = videoData.items.map(video => ({
              title: video.snippet.title,
              url: `https://www.youtube.com/watch?v=${video.id}`,
              thumbnail: video.snippet.thumbnails.default.url,
              duration: convertDuration(video.contentDetails.duration) // Convertir duración
            }));
            setVideos(videos);
            setCurrentVideo(videos[0].url); // Establece el primer video como el video actual
            setLoading(false);
          });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Error al cargar los datos:', error);
        setError('Error al cargar los datos');
        setLoading(false);
      });
  }, []);


  if (loading) {return <div>Cargando...</div>;}
  if (error) {return <div>{error}</div>;}

  return (
    <div >
      <h1>Test playlist de YOUTUBE</h1>
      <VideoPlayer url={currentVideo} />
      <Playlist videos={videos} onSelect={setCurrentVideo} />
    </div>
  );
};

export default AppYt;

// Clave de API de YouTube
// Para obtener tu clave de API de YouTube, sigue estos pasos:
// Ve a la consola de desarrolladores de Google.
// Crea un nuevo proyecto.
// Activa la API de YouTube.
// Crea una clave de API.
// Copia la clave de API y pégala en el código.
// AIzaSyByn8MlSO-w4TLRerlr2JpiZJ5jQo_Ysv8

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/EuyAAPx21Cs?si=N2uRMGhEg-TIx5Nt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}