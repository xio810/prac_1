// 할일리스트
/*
- [x] 할일 입력상자
- [x] 할일추가 버튼 구현
- [x] newTodoTitle 변수와 할일 입력상자 연결
- [x] 할일추가 버튼을 누르면 입력상자의 텍스트가 비워짐
- [x] 할일추가 버튼을 누르면 목록에 임시 새 할일이 추가됨
- [x] 할일추가 버튼을 누르면 목록에 내가 입력한 새 할일이 추가됨
- [x] 할일목록에 번호가 순차적으로 증가
- [x] 삭제버튼 추가
- [x] 삭제버튼 누르면 정말로 삭제
- [x] NewTodoForm, TodoList, TodoListItem
- [x] 아이템 수정 폼
- [x] 아이템 수정 처리
*/

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <NewTodoForm todos={todos} setTodos={setTodos} />
      <hr />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

const NewTodoForm = ({ todos, setTodos }) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [lastTodoId, setLastTodoId] = useState(0);

  const btnAddTodoClicked = () => {
    const newTodo = {
      id: lastTodoId + 1,
      title: newTodoTitle
    };

    setTodos([...todos, newTodo]);
    setNewTodoTitle("");
    setLastTodoId(newTodo.id);
  };

  return (
    <div>
      <span>새 할일</span>
      &nbsp;
      <input
        type="text"
        placeholder="새 할일을 입력해주세요."
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      &nbsp;
      <button onClick={btnAddTodoClicked}>할일추가</button>
    </div>
  );
};

const TodoList = ({ todos, setTodos }) => {
  if (todos.length == 0) return <div>목록없음</div>;

  const btnDeleteTodoClicked = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const editTodoTitle = (id, newTitle) => {
    setTodos(
      todos.map((todo) => (todo.id == id ? { ...todo, title: newTitle } : todo))
    );
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem todo={todo} btnDeleteTodoClicked={btnDeleteTodoClicked} editTodoTitle={editTodoTitle} />
      ))}
    </ul>
  );
};

const TodoListItem = ({ todo, btnDeleteTodoClicked, editTodoTitle }) => {
  const [newTodoTitle, setNewTodoTitle] = useState(todo.title);
  const [editMode, setEditMode] = useState(false);

  const btnShowEditTodoClicked = () => {
    setEditMode(true);
  };

  const btnCancelEditTodoClicked = () => {
    setNewTodoTitle(todo.title);
    setEditMode(false);
  };

  const btnCommitEditTodoClicked = () => {
    setEditMode(false);
    editTodoTitle(todo.id, newTodoTitle);
  };

  return (
    <li key={todo}>
      {todo.id}{" "}
      {editMode ? (
        <>
          <input
            type="text"
            placeholder="수정된 제목"
            value={newTodoTitle}
            onChange={({ target: { value } }) => setNewTodoTitle(value)}
          />{" "}
          <button onClick={btnCommitEditTodoClicked}>수정완료</button>{" "}
          <button onClick={btnCancelEditTodoClicked}>수정취소</button>
        </>
      ) : (
        <>
          {todo.title} <button onClick={btnShowEditTodoClicked}>수정</button>
        </>
      )}
      &nbsp;
      <button onClick={() => btnDeleteTodoClicked(todo.id)}>삭제</button>
    </li>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
