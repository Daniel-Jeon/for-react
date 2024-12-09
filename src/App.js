import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => console.log("call the api"), []);
  useEffect(() => {
    console.log("i run when 'keyword' change");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' change");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'both' change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />
      <h1>Welcome Back {counter}</h1>
      <button onClick={onClick}></button>
    </div>
  );
}

export default App;
