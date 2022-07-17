import {
  PauseIcon,
  PlayIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from '@heroicons/react/outline';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import { getLinkYoutue } from '@/utils/ultils';
import ReactPlayer from 'react-player'
import styles from './video.module.css';

// const ReactPlayer = dynamic(() => import('react-player'), {
//   ssr: false,
// });

const VideoPlayer = (props) => {
  const { muted, setMuteVideo, postFile, postYoutube, playing } = props; 
  const [isVideoVisible, setVideoVisible] = useState(false);
  console.log('postYoutube: ', postYoutube);
  // useEffect(() => {
  //   if (isVideoVisible) {
  //     setVideoPlay(true);
  //   } else if (playing) {
  //     setVideoPlay(false);
  //   }
  // }, [isVideoVisible]);

  // console.log(getLinkYoutue(postYoutube))

  return (
      <div className={styles.videoWrapper}>
        <ReactPlayer
          url={getLinkYoutue(postYoutube)}
          playing={playing}
          muted={muted}
          pip
          // height="auto"
          // width="auto"
          className="min-w-fit"
          controls
        />
      </div>
  );
};

export default VideoPlayer;
