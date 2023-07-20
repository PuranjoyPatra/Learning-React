import "./App.css";
import videosDB from "./data/videos";
import resume from "./data/resumedata";
import List from "./components/List";
import Resume from "./components/Resume";
import Avatar from "./components/Avatar";

import { useContext, useReducer, useState } from "react";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/Context";

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

const [mode, setMode] = useState('darkMode')

console.log(mode);

  function editVideo(id) {
    setEditable(videos.find((video) => video.id === id));
  }

  return (
    <ThemeContext.Provider value={mode}>
    <div className={`App ${mode}`} onClick={() => console.log("App", mode)}>
      <button onClick={()=>setMode(mode=='darkMode'?'lightMode':'darkMode')}>Change Theme</button>
      <AddVideos dispatch={dispatch} editableVideo={editable} />
      <VideoList videos={videos} dispatch={dispatch} editVideo={editVideo} />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
