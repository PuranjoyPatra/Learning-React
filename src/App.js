import "./App.css";

import resume from "./data/resumedata";
import List from "./components/List";
import Resume from "./components/Resume";

import Event from "./components/Event";

import { useState } from "react";
import Clock from "./components/Clock";
import SelectionOption from "./components/SelectionOption";

function App() {
  return (
    <div className='App'>
<SelectionOption/>  

      {/* <h2>Assignment: Resume Builder</h2>

      <Resume data={resume} />

      <Clock/> */}

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
