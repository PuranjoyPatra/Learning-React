import "./Video.css";
import useVideoDispatch from "../hook/VideoDispatch";
import { memo } from "react";
// import ThemeContext from "../context/Context";

const Video = memo(function Video({
  id,
  title,
  channel,
  views,
  times,
  verified,
  children,
  editVideo,
}) {
  // const theme = useContext(ThemeContext)
  console.log("rendering video ");

  // const dispatch = useContext(VideoDispatchContext)

  // use custom hook

  const dispatch = useVideoDispatch();

  return (
    <>
      <div className='container'>
        <button
          className='close'
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: "DELETE", payload: id });
          }}
        >
          X
        </button>
        <button
          className='edit'
          onClick={(e) => {
            e.stopPropagation();
            editVideo(id);
          }}
        >
          Edit
        </button>
        <div className='pic'>
          <img
            src='https://images.pexels.com/photos/942208/pexels-photo-942208.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt='thumbnail'
          />
        </div>

        <div className='title'>{title} - the complete guide</div>

        <div className='channel'>
          {channel} {verified && "⌚"}
        </div>
        <div className='views'>
          {views} views <span>|</span> {times}
        </div>
        {children}
      </div>
    </>
  );
});

export default Video;
