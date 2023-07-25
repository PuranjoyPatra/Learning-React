import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideo from "../hook/Video";
import { useCallback, useMemo } from "react";

function VideoList({ editVideo }) {
  // const videos = useContext(VideoContext)

  // use custom hook

  const videos = useVideo();
  const play = useCallback(() => console.log("playing..."), []);
  const pause = useCallback(() => console.log("paused..."), []);
  const memoButton = useMemo(
    () => (
      <PlayButton onPlay={play} onPause={pause}>
        Play
      </PlayButton>
    ),
    []
  );

  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          times={video.times}
          verified={video.verified}
          editVideo={editVideo}
        >
          {memoButton}
        </Video>
      ))}
    </>
  );
}

export default VideoList;
