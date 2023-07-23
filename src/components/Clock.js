import { useEffect, useState } from "react";

function Clock() {
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [pause, setPause] = useState(false);

  // const id = setInterval(()=>{
  //     setDate(new Date())
  // }, 1000)

  // console.log(id);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pause) {
        setDate(new Date());
      }
    }, 1000);

    console.log(id, pause);
    return () => clearInterval(id);
  }, [pause]);

  return (
    <>
      <h3 className='digitalClock'>Digital Clock</h3>
      <h1 className='digitalClock'>
        {(date.getHours() % 12) +
          ":" +
          date.getMinutes() +
          ":" +
          date.getSeconds()}
      </h1>
      <br />
      <hr />

      <h3 className='stopWatch'>Stop Watch</h3>
      <h1 className='stopWatch'>
        {Math.floor((date - startDate) / (1000 * 3600)) +
          ":" +
          Math.floor((date - startDate) / (1000 * 60)) +
          ":" +
          (Math.floor((date - startDate) / 1000) % 60)}
      </h1>
      <div className='btn'>
        <button
          className='clBtn'
          onClick={(e) => {
            e.stopPropagation();
            setStartDate(new Date());
            setDate(new Date());
            setPause(false);
          }}
        >
          {" "}
          Reset
        </button>
        <button
          className='clBtn'
          onClick={(e) => {
            e.stopPropagation();
            setPause(true);
            console.log("later implementing...");
          }}
        >
          {" "}
          Stop
        </button>
      </div>
    </>
  );
}

export default Clock;
