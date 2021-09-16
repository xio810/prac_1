//num + 1 증가, - 1 감소
javascript
import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const App = () => {
  const [num, setNum] = useState(1);
  // let num = 1;

  return (
    <>
      <div>현재 숫자 : {num}</div>
      <div>현재 숫자 : {num}</div>
      <div>현재 숫자 : {num}</div>
      <div>현재 숫자 : {num}</div>
      <div>현재 숫자 : {num}</div>
      <button onClick={() => setNum(num + 1)}>+ 1</button>
      <button onClick={() => setNum(num - 1)}>- 1</button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


//변형 (곱하기, 0)
import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const App = () => {
  const [num, setNum] = useState(1);
  // let num = 1;

  return (
    <>
      <div>현재 숫자 : {num}</div>
      <div>현재 숫자 : {num}</div>
      <div>현재 숫자 : {num}</div>
      <div>현재 숫자 : {num}</div>
      <div>현재 숫자 : {num}</div>
      <button onClick={() => setNum(num + 1)}>+ 1</button>
      <button onClick={() => setNum(num - 1)}>- 1</button>
      <button onClick={() => setNum(num * 2)}>* 2</button>
		//1로 되돌려줌
      <button onClick={() => setNum(1)}>return</button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
//html에 id admin추가
ReactDOM.render("hello", document.getElementById("admin"));
