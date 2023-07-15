import { useState } from "react";
function Event() {
  const [size, setSize] = useState(false);
  function handleEvent(e) {
    setSize(true);
    console.log("size over");
  }

  function handleEventOut(e) {
    setSize(false);
    console.log("size out");
  }

  function handleDoubleClick(event) {
    event.stopPropagation();
    console.log("double click event....");
    alert("double clicked");
  }

  function handleKeyDown(e) {
    if (e.keyCode == 13) {
      console.log("enter key only ...");
      alert(e.target.value);
    }
  }

  return (
    <div>
      <img
        style={size ? { transform: "scale(1.5)" } : {}}
        onMouseOver={handleEvent}
        onMouseOut={handleEventOut}
        src='https://images.pexels.com/photos/942208/pexels-photo-942208.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        alt='event-img'
      />
      <button
        onDoubleClick={handleDoubleClick}
        onClick={(e) => e.stopPropagation()}
      >
        btn
      </button>
      <input
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()}
        onFocus={() => console.log("focused")}
        onBlur={() => console.log("blured..")}
        type='text'
        name=''
        id=''
      />
    </div>
  );
}

export default Event;
