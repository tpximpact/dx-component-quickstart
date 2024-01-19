import React, { ReactElement } from "react";
import styles from "./video.module.scss";

export interface VideoProps {
  videoSrc: string;
  posterImage: string;
}

export default function Video({
  videoSrc,
  posterImage,
}: VideoProps): ReactElement {
  // const videoRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  return (
    <video className={styles.videoPlayer} poster={posterImage}>
      <source src={videoSrc} type="video/mp4" />
      <track
        src="captions_en.vtt"
        kind="captions"
        srcLang="en"
        label="english_captions"
      />
    </video>
  );
}
