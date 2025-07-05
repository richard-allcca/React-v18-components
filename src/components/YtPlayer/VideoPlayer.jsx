import PropTypes from 'prop-types';

const VideoPlayer = ({ url }) => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={url.replace('watch?v=', 'embed/')}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoPlayer;
