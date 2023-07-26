import { useImperativeHandle } from "react";
import useVideoDispatch from "../hook/VideoDispatch";
import "./AddVideos.css";
import { forwardRef, useEffect, useRef, useState } from "react";

const AddVideos = forwardRef(function AddVideos({ editableVideo }, ref) {
  const iRef = useRef(null);
  const initState = {
    channel: "code with OS",
    title: "",
    views: "",
    times: "1d ago",
    verified: false,
  };
  const [video, setVideo] = useState(initState);
  // const dispatch = useContext(VideoDispatchContext)
  // use custom hook

  const dispatch = useVideoDispatch();

  // const dispatch = useVideoDispatch()

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }

    setVideo(initState);
    // console.log(video);
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        jumpTo() {
          iRef.current.focus();
        },
      };
    },
    []
  );

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }

    // inputRef.current.focus();
    // inputRef.current.placeholder = "type your name here";
  }, [editableVideo]);

  return (
    <form>
      <input
        ref={iRef}
        type='text'
        onChange={handleChange}
        name='title'
        placeholder='Video Title'
        value={video.title}
      />
      <input
        type='text'
        onChange={handleChange}
        name='views'
        placeholder='Video Views'
        value={video.views}
      />
      <button onClick={handleSubmit}>
        {editableVideo ? "edit video" : "Add Video"}
      </button>
    </form>
  );
});

export default AddVideos;
