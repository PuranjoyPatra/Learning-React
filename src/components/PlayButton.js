import "./PlayButton.css";
import { useState } from "react";
function PlayButton({ name, message, children, onClick, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);

  function handleClick(e) {
    // console.log(e)
    e.stopPropagation();
    // onClick(message);
    if (playing) onPause();
    else onPlay();
    setPlaying(!playing);
  }

  return <button onClick={handleClick}>{children} : {playing?'⏸️' : '▶️'}</button>;
}

export default PlayButton;
