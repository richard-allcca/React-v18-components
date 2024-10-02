/* eslint-disable curly */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useWindowSize from './../../hooks/useWindowSize';
import './VideoPlayer.css';

const VideoPlayer = ({ videoData }) => {
    const { isMobile, isTablet, isDesktop } = useWindowSize();

    const { playlist } = videoData;
    const sources = playlist[ 0 ].sources || [];

    const getVideo = () => {
        if (isMobile) {
            return (
                <div>
                    <video className='video' autoPlay controls muted>
                        <source src={ sources[ 2 ].file } type="video/mp4" />
                    </video>
                </div>
            );
        }

        if (isTablet) {
            return (
                <video className='video' autoPlay controls muted>
                    <source src={ sources[ 5 ].file } type="video/mp4" />
                </video>
            );
        }

        if (isDesktop) {
            return (
                <video className='video' autoPlay controls muted>
                    <source src={ sources[ 7 ].file } type="video/mp4" />
                </video>
            );
        }

        return (
            <video className='video' autoPlay controls muted>
                <source src={ sources[ 6 ].file } type="video/mp4" />
            </video>
        );
    };

    return (
        <div className='video-player'>
            { getVideo() }
        </div>
    );

};

VideoPlayer.propTypes = {
    videoData: PropTypes.object.isRequired
};

export default VideoPlayer;
