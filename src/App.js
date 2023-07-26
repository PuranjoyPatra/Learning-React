import "./App.css";
import videosDB from "./data/videos";
import resume from "./data/resumedata";
import List from "./components/List";
import Resume from "./components/Resume";
import Avatar from "./components/Avatar";

import { useCallback, useContext, useReducer, useRef, useState } from "react";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/Context";
import VideoContext from "./context/VideoContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import Counter from "./components/Counter";

function App() {
  console.log("rendering App");
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

  const [mode, setMode] = useState("darkMode");
  const inputRef = useRef(null);

  console.log(mode);

  const editVideo = useCallback(function editVideo(id) {
    setEditable(videos.find((video) => video.id === id));
  }, []);

  return (
    <ThemeContext.Provider value={mode}>
      <VideoContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div
            className={`App ${mode}`}
            onClick={() => console.log("App", mode)}
          >
            {/* <Counter/>
            <br />
            <hr />
            <br /> */}
            <button
              onClick={() =>
                setMode(mode == "darkMode" ? "lightMode" : "darkMode")
              }
            >
              Change Theme
            </button>
            <button onClick={() => inputRef.current.jumpTo()}>Focus</button>

            <AddVideos ref={inputRef} editableVideo={editable} />
            {/* <VideoList editVideo={editVideo} /> */}
          </div>
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
