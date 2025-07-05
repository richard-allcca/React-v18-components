import PropTypes from 'prop-types';

const Playlist = ({ videos, onSelect }) => {
  return (
    <div>
      <h3>Lista de reproducción</h3>
      <div style={styles.playlist}>
        {videos.map((video, index) => (
          <div key={index} style={styles.card} onClick={() => onSelect(video.url)}>
            <img src={video.thumbnail} alt={video.title} style={styles.thumbnail} />
            <div style={styles.info}>
              <h4>{video.title}</h4>
              <p>{video.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  playlist: {
    display: 'flex',
    flexDirection: 'column',
    // gap: '10px'
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  thumbnail: {
    width: '120px',
    height: '90px',
    marginRight: '10px',
    borderRadius: '5px'
  },
  info: {
    display: 'flex',
    flexDirection: 'column'
  }
};

Playlist.propTypes = {
  videos: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Playlist;
