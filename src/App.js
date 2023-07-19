import "./App.css";
import videosDB from "./data/videos";
import resume from "./data/resumedata";
import List from "./components/List";
import Resume from "./components/Resume";
import Avatar from "./components/Avatar";

import { useReducer, useState } from "react";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";

function App() {
  const [editable, setEditable] = useState(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 4 }];
      case "DELETE":
        return videos.filter((video) => video.id != action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id == action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditable(null);
        return newVideos;
      default:
        return videos;
    }
  }
  //reducer
  const [videos, dispatch] = useReducer(videoReducer, videosDB);

  function editVideo(id) {
    setEditable(videos.find((video) => video.id === id));
  }

  return (
    <div className='App' onClick={() => console.log("App")}>
      <AddVideos dispatch={dispatch} editableVideo={editable} />
      <VideoList videos={videos} dispatch={dispatch} editVideo={editVideo} />
    </div>
  );
}

export default App;
