import "./AddVideos.css";
import { useState } from "react";

function AddVideos({ addVideos }) {
  const initState = {
    channel: "code with OS",
    title: "",
    views: "",
    times: "1d ago",
    verified: false,
  };
  const [video, setVideo] = useState(initState);

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initState);
    // console.log(video);
  }

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
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
}

export default AddVideos;
