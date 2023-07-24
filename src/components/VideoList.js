import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideo from "../hook/Video";

function VideoList({ editVideo }) {
  // const videos = useContext(VideoContext)

  // use custom hook

  const videos = useVideo();

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
          <PlayButton
            onPlay={() => console.log("playing...", video.title)}
            onPause={() => console.log("paused. ", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
}

export default VideoList;
