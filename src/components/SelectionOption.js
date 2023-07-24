import { useState } from "react";
const SelectionOption = () => {
  const [option, setOption] = useState([]);
  const [nation, setNation] = useState({ country: "", value: "" });

  function handleInput(e) {
    setNation({ ...nation, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nation.country && nation.value) {
      setOption([...option, nation]);
      setNation({ country: "", value: "" });
    }else{
        console.log("enter valid input");
    }
  }

  return (
    <>
      <select onChange={(e) => console.log(e.target.value)}>
        <option value=''>--Select--</option>
        {option.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.country}</option>
        ))}
      </select>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleInput}
          name='country'
          value={nation.country}
          placeholder='type country name'
        />
        <input
          type='text'
          onChange={handleInput}
          name='value'
          value={nation.value}
          placeholder='type country code'
        />
        <button className='clBtn'>Submit</button>
      </form>
    </>
  );
};

export default SelectionOption;
