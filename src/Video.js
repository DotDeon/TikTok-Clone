import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/9484b18931531740971b5fb2bbfe47bb/5fbac4d8/video/tos/useast2a/tos-useast2a-ve-0068c003/64cf3b9f6d204be399b6889c36486296/?a=1233&br=2448&bt=1224&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202011221406340101902192224100F9DD&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2ZpajY8dm80eDMzNzczM0ApNTo1aTw6Zzs5NzpnOmk4aWdpLi9qYWVmYGNfLS1iMTZzc2I2NmAyNWIuNDQxXjMuYTI6Yw%3D%3D&vl=&vr="
      ></video>

      <VideoFooter />
      <VideoSidebar />
      {/*Video Footer*/}
      {/*Video Sidebar*/}
    </div>
  );
}

export default Video;
