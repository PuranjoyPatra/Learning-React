import VideoDispatchContext from "../context/VideoDispatchContext";
import useVideoDispatch from "../hook/VideoDispatch";
import "./AddVideos.css";
import { useContext, useEffect, useState } from "react";

function AddVideos({ editableVideo }) {
  const initState = {
    channel: "code with OS",
    title: "",
    views: "",
    times: "1d ago",
    verified: false,
  };
  const [video, setVideo] = useState(initState);
  const dispatch = useContext(VideoDispatchContext)

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
  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  return (
    <form>
      <input
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
}

export default AddVideos;
