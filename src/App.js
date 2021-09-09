import { useState } from "react";
import "./styles.css";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const onChangeInputTodo = (e) => {
    setInputTodo(e.target.value);
  };

  const onClickAdd = () => {
    if (inputTodo === "") return;
    const newTodos = [...incompleteTodos, inputTodo];
    setIncompleteTodos(newTodos);
    setInputTodo("");
  };

  return (
    <div className="App-header">
      <h1>TODOリスト</h1>

      <form>
        <label>
          <input type="radio" id="all-Todo" name="Todo" checked />
          全て
        </label>
        <label>
          <input type="radio" id="incomplete-Todo" name="Todo" />
          作業中
        </label>
        <label>
          <input type="radio" id="complete-Todo" name="Todo" />
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
          <tr>
            <td>番号</td>
            <td>やることやることやることやることやることやること</td>
            <td>ボタン</td>
          </tr>
        </tbody>
      </table>

      <div>
        <ol>
          {incompleteTodos.map((todo) => {
            return (
              <div className="list-row" key={todo}>
                <li>{todo}</li>
                <button>作業中</button>
                <button>削除</button>
              </div>
            );
          })}
        </ol>
      </div>

      <div>
        <h2>新規タスクの追加</h2>
        <input placeholder="Enter a new TODO" value={inputTodo} onChange={onChangeInputTodo} />
        <button onClick={onClickAdd}>追加</button>
      </div>
    </div>
  );
}

export default App;
