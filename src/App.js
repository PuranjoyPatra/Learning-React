import "./App.css";

import resume from "./data/resumedata";
import List from "./components/List";
import Resume from "./components/Resume";
import Avatar from "./components/Avatar";

import Event from "./components/Event";

import { useState } from "react";

function App() {
  return (
    <div className='App'>
      <h2>Assignment: Resume Builder</h2>
      <h1>Resume</h1>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Resume data={resume} />

      {/* <h2>Assignment: Chapter 3</h2>
      <List layout='numbered' items={videos} />
      <List layout='bullet' items={videos} />
      <List layout='alpha' items={videos} />
      <List layout='al' items={videos} /> */}

      {/* <Event /> */}
    </div>
  );
}

export default App;
