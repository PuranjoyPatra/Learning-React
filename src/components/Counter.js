import { useRef, useState } from "react";

const Counter = () => {
  console.log("rendering counter");
  const [number, setNumber] = useState(0);
  let numClick = useRef(null);

  function handleCount(e) {
    e.stopPropagation();
    // setNumber(number=>number+1)
    setNumber(number + 1);
    numClick.current++;
  }
  console.log("no of clicked", numClick.current);

  return (
    <>
      <h1>{number} </h1>
      <button onClick={handleCount}>Add</button>
    </>
  );
};

export default Counter;
