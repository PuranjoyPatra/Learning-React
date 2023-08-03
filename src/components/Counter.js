import { useState } from "react";
import {useCounter} from "../hooks/Counter";
function Counter() {
  console.log("rendering");
  const [number, setNumber] = useState(0);
  const [num, inc, dec] = useCounter(5);
  function handleClick(e) {
    e.stopPropagation();
    setTimeout(() => {
      setNumber(number + 1);
    }, 2000);

    console.log(number);
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>ADD</button>
      <hr />
      <h1>Counter Hook : {num}</h1>

      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </>
  );
}

export default Counter;
