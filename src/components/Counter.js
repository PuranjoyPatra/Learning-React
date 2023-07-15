import { useState } from "react";

function Counter() {
    console.log("rendering");
  const [number, setNumber] = useState(0);
  function handleClick(e) {
    e.stopPropagation();
    setTimeout(()=>{setNumber(number + 1);}, 2000)
    
    console.log(number);
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>ADD</button>
    </>
  );
}

export default Counter;
