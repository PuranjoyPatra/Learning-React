import "./App.css";
import videosDB from "./data/videos";
import resume from "./data/resumedata";
import List from "./components/List";
import Resume from "./components/Resume";
import Avatar from "./components/Avatar";

import { useState } from "react";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videosDB);
  const [editable, setEditable] = useState(null);
  function addVideo(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id == video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
  }

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id != id));
  }

  function editVideo(id) {
    setEditable(videos.find((video) => video.id === id));
  }

  return (
    <div className='App' onClick={() => console.log("App")}>
      <AddVideos
        addVideos={addVideo}
        updateVideo={updateVideo}
        editableVideo={editable}
      />
      <VideoList
        videos={videos}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      />
    </div>
  );
}

export default App;
