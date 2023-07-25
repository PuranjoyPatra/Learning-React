import { memo } from "react";
import "./PlayButton.css";
import { useState } from "react";

const PlayButton = memo(function PlayButton({
  name,
  message,
  children,
  onClick,
  onPlay,
  onPause,
}) {
  console.log("rendering play button");
  const [playing, setPlaying] = useState(false);

  function handleClick(e) {
    // console.log(e)
    e.stopPropagation();
    // onClick(message);
    if (playing) onPause();
    else onPlay();
    setPlaying(!playing);
  }

  return (
    <button onClick={handleClick}>
      {children} : {playing ? "⏸️" : "▶️"}
    </button>
  );
});

export default PlayButton;
