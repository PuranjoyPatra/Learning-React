import Video from "./Video";
import Border from "./Border";
import PlayButton from "./PlayButton";

function VideoList({ videos, dispatch, editVideo }) {
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
          dispatch={dispatch}
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
