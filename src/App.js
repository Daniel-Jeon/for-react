import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, addTodos] = useState([]);
  const changeTodo = (event) => {
    setTodo(event.target.value);
  };
  const saveTodos = (event) => {
    event.preventDefault();
    if (todo === "") return;
    addTodos((todosArray) => [todo, ...todosArray]);
    setTodo("");
  };
  console.log("todos:", todos);
  return (
    <>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={saveTodos}>
        <input
          value={todo}
          onChange={changeTodo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
