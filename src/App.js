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
  function addVideo(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <div className='App' onClick={() => console.log("App")}>
      <AddVideos addVideos={addVideo} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
