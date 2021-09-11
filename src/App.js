import { useState } from "react";

//入力用 todos
//未完了のTodo用 comment

function App() {
  const [todos, setTodos] = useState([]);
  const [comment, setComment] = useState("");

  const onChangeTodo = (e) => {
    setComment(e.target.value);
  };

  const addTodo = () => {
    if (comment === "") return;

    const todo = {
      id: todos.length + 1,
      comment,
      status: "incomplete",
    };
    setTodos([...todos, todo]);
    setComment("");

    // const newTodos = [...incompleteTodos, inputTodo];
    // setIncompleteTodos(newTodos);
    // setInputTodo("");
  };

  return (
    <div className="App-header">
      <h1>TODOリスト</h1>

      <form>
        <label>
          <input type="radio" id="all-Todo" name="Todo" defaultChecked />
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
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.comment}</td>
                <td>
                  <button>作業中</button>
                  <button>削除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <h2>新規タスクの追加</h2>
        <input placeholder="Enter a new TODO" value={comment} onChange={onChangeTodo} />
        <button onClick={addTodo}>追加</button>
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import "./styles.css";

// function App() {
//   const [inputTodo, setInputTodo] = useState("");
//   const [incompleteTodos, setIncompleteTodos] = useState([]);

//   const onChangeInputTodo = (e) => {
//     setInputTodo(e.target.value);
//   };

//   const onClickAdd = () => {
//     if (inputTodo === "") return;
//     const newTodos = [...incompleteTodos, inputTodo];
//     setIncompleteTodos(newTodos);
//     setInputTodo("");
//   };

//   return (
//     <div className="App-header">
//       <h1>TODOリスト</h1>

//       <form>
//         <label>
//           <input type="radio" id="all-Todo" name="Todo" checked />
//           全て
//         </label>
//         <label>
//           <input type="radio" id="incomplete-Todo" name="Todo" />
//           作業中
//         </label>
//         <label>
//           <input type="radio" id="complete-Todo" name="Todo" />
//           完了
//         </label>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>コメント</th>
//             <th>状態</th>
//           </tr>
//         </thead>
//         {/* <tbody>
//           <tr>
//             <td text="todo.id"></td>
//             <td text="todo.comment"></td>
//             <td>ボタン</td>
//           </tr>
//         </tbody> */}
//         <tbody>
//           <ol>
//             {incompleteTodos.map((todo) => {
//               return (
//                 <tr className="list-row" key={todo}>
//                   <td>
//                     <li>{todo}</li>
//                   </td>
//                   <td>
//                     <button>作業中</button>
//                     <button>削除</button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </ol>
//         </tbody>
//       </table>

//       <div>
//         <h2>新規タスクの追加</h2>
//         <input placeholder="Enter a new TODO" value={inputTodo} onChange={onChangeInputTodo} />
//         <button onClick={onClickAdd}>追加</button>
//       </div>
//     </div>
//   );
// }

// export default App;
