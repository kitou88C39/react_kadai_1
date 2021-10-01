import React, { useState } from "react";

//入力用 todos
//未完了のTodo用 comment

function App() {
  const [todos, setTodos] = useState([]);
  const [comment, setComment] = useState("");
  const [radio, setRadio] = useState("all");

  const addTodo = () => {
    if (comment === "") return;

    const todo = {
      id: todos.length + 1,
      comment,
      status: "incomplete",
    };
    setTodos([...todos, todo]);
    setComment("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setTodos(newTodos.map((e, i) => ({ ...e, id: i + 1 })));
  };
  const toggle = (todoId) => {
    setTodos(
      todos.map((todo, i) =>
        todoId === todo.id
          ? {
              ...todo,
              status: todo.status === "incomplete" ? "completed" : "incomplete", // completed は「完了」を表す
            }
          : todo
      )
    );
  };

  const switchTodos = () => {
    if (radio === "completed") {
      return todos.filter((todo) => todo.status === "completed");
    }
    if (radio === "incomplete") {
      return todos.filter((todo) => todo.status === "incomplete");
    }
    return todos;
  };

  return (
    <div className="App-header">
      <h1>TODOリスト</h1>

      <form>
        <label>
          <input type="radio" value="all" onChange={(e) => setRadio(e.target.value)} checked={radio === "all"} />
          全て
        </label>
        <label>
          <input
            type="radio"
            value="incomplete"
            onChange={(e) => setRadio(e.target.value)}
            checked={radio === "incomplete"}
          />
          作業中
        </label>
        <label>
          <input
            type="radio"
            value="completed"
            onChange={(e) => setRadio(e.target.value)}
            checked={radio === "completed"}
          />
          完了
        </label>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
          </tr>
        </thead>
        <tbody>
          {switchTodos().map((todo, index) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.comment}</td>
                <td>
                  <button onClick={() => toggle(todo.id)}>{todo.status === "incomplete" ? "作業中" : "完了"}</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <h2>新規タスクの追加</h2>

        <input placeholder="Enter a new TODO" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button onClick={addTodo}>追加</button>
      </div>
    </div>
  );
}

export default App;
