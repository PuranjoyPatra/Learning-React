import "./App.css";
import videosDB from "./data/videos";
import resume from "./data/resumedata";
import List from "./components/List";
import Resume from "./components/Resume";
import Avatar from "./components/Avatar";

import { clear } from "@testing-library/user-event/dist/clear";
import Counter from "./components/Counter";
import Event from "./components/Event";

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
      {/* usestate veriable don't change value, need copy and assign to state variable */}
      {/* <div>
        <button
          onClick={() => {
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "Android",
                channel: "code with OS",
                views: "10k",
                times: "1d ago",
                verified: false,
              },
            ]);
          }}
        >
          Add Video
        </button>
      </div> */}

      <AddVideos addVideos={addVideo} />
      <VideoList videos={videos}/>

      {/* <h2>Assignment: Resume Builder</h2>
      <h1>Resume</h1>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Resume data={resume} /> */}
      {/* <div style={{ clear: "both" }}>
        <PlayButton
          name='Play'
          message='play-msg'
          onClick={(msg) => console.log(msg)}
        >
          play
        </PlayButton>
        <PlayButton
          name='Pause'
          message='pause-msg'
          onClick={(msg) => alert(msg)}
        >
          pause
        </PlayButton>
      </div> */}

      {/* <h2>Assignment: Chapter 3</h2>
      <List layout='numbered' items={videos} />
      <List layout='bullet' items={videos} />
      <List layout='alpha' items={videos} />
      <List layout='al' items={videos} /> */}

      {/* <Video
        title='MongoDB tutorial'
        channel='Learn Code'
        views='750k'
        times='7d ago'
        verified={false} //don't use 0 or 1 as value in case of short-circuit conditional rendering
      />  */}

      <Counter />
      {/* <Event /> */}
    </div>
  );
}

export default App;
