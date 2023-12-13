import React, { ReactElement } from 'react';
import getMimeType from '../../utils/getMimeType';

export interface AudioProps {
  /**
   * Audio file name
   * This can be a file path; e.g. default/files/public/myAudio.ogg
   */
  audioSrc: string;
  /**
   * controls to display on player
   */
  controls?: boolean;
  /**
   * Auto play on load
   */
  autoPlay?: boolean;
}

export default function Audio({ audioSrc, controls, autoPlay }: AudioProps): ReactElement {
  const audioFormat = getMimeType(audioSrc);
  return audioFormat.includes('audio') === false ? (
    <div>
      Please check audioSrc is a valid web audio format, e.g. mp3, ogg, aac <br />
      Mimetype is set to: {audioFormat}
    </div>
  ) : (
    <audio controls={controls} autoPlay={autoPlay} className="audio-player">
      <source src={audioSrc} type={audioFormat} />
      <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
      Your browser does not support the HTML audio element.
    </audio>
  );
}

Audio.defaultProps = {
  audioSrc: 'myAudio.mp3',
  controls: true,
  autoPlay: false
};
