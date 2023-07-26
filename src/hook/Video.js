import { useContext } from "react";
import VideoContext from "../context/VideoContext";
import { useDebugValue } from "react";

function useVideo() {
  useDebugValue(useContext(VideoContext).length);
  return useContext(VideoContext);
}

export default useVideo;
