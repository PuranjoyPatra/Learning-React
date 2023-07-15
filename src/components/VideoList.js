import Video from "./Video";
import Border from "./Border";
import PlayButton from "./PlayButton";

function VideoList({videos}) {
  return (
    <>
      {videos.map((video) => (
        <Border key={video.id} color='gold'>
          <Video
            title={video.title}
            channel={video.channel}
            views={video.views}
            times={video.times}
            verified={video.verified}
          >
            <PlayButton
              onPlay={() => console.log("playing...", video.title)}
              onPause={() => console.log("paused. ", video.title)}
            >
              {video.title}
            </PlayButton>
          </Video>
        </Border>
      ))}
    </>
  );
}

export default VideoList;
