import {
  PauseIcon,
  PlayIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

import { getLinkYoutue } from '@/utils/ultils';
import ReactPlayer from 'react-player'
import styles from './video.module.css';
import YoutubePlayer from './Youtube';
// const ReactPlayer = dynamic(() => import('react-player'), {
//   ssr: false,
// });

const VideoPlayer = (props) => {
  const { muted, setMuteVideo, postFile, postYoutube } = props;
  const [playing, setVideoPlay] = useState(false);
  const [isVideoVisible, setVideoVisible] = useState(false);
  console.log('muted: ', muted);
  useEffect(() => {
    if (isVideoVisible) {
      setVideoPlay(true);
    } else if (playing) {
      setVideoPlay(false);
    }
  }, [isVideoVisible]);

  console.log(getLinkYoutue(postYoutube))

  return (
    // <VisibilitySensor
    //   onChange={(isVisible: boolean) => setVideoVisible(isVisible)}
    // >


      <div className={styles.videoWrapper}>
        {postYoutube && <YoutubePlayer playing={playing} muted={muted} postYoutube={postYoutube} />}
        {postFile && 
          <>
            <ReactPlayer
              url={postFile}
              playing={playing}
              muted={muted}
              pip
              height="auto"
              width="auto"
              controls
            />
            {/* <div className={styles.controls}>
              <div className={styles.actions}>
                <button className={styles.btnPlay}>
                  {playing ? (
                    <PauseIcon
                      onClick={() => setVideoPlay(false)}
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <PlayIcon
                      onClick={() => setVideoPlay(true)}
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
              <input type="range" min="0" max="100" />
              <button className={styles['mute-btn']}>
                {muted ? (
                  <VolumeOffIcon
                    className="h-6 w-6"
                    onClick={() => setMuteVideo(false)}
                  />
                ) : (
                  <VolumeUpIcon
                    className="h-6 w-6"
                    onClick={() => setMuteVideo(true)}
                  />
                )}
              </button>
            </div> */}
          </>
        }
        
      </div>
  );
};

export default VideoPlayer;
