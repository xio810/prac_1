//원과 사각형을 만드는 태그 생성
import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";


const App = () => {
  return (
    <>
     <Circle />
     <Square></Square>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//Circle 과 Square 함수 생성
import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

//원 함수
const Circle = () => {
	return (
		<div></div>
	);
}

//사각형 함수
const Square = () => {
	return (
		<div></div>
	);
}

const App = () => {
  return (
    <>
     <Circle />
     <Square></Square>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//className 적용
//원 함수
const Circle = () => {
	return (
		<div className="circle">Circle</div>
	);
}

//사각형 함수
const Square = () => {
	return (
		<div className="square">Square</div>
	);
}

const App = () => {
  return (
    <>
     <Circle />
     <Square></Square>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//const div에 className 삭제, style 삽입
//원 함수
const Circle = () => {
	return (
		<div style={}>Circle</div>
	);
}

//사각형 함수
const Square = () => {
	return (
		<div style={}>Square</div>
	);
}

const App = () => {
  return (
    <>
     <Circle />
     <Square></Square>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//style 변수를 만들어서 그 안에 css 넣기
//원 함수
const Circle = () => {
	const style = {
	  width: "100px",
    height: "100px",
    backgroundColor: "gold",
    margin: "20px",
    "border-radius": "50%",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "font-weight": "bold"
	}

	return (
		<div style={style}>Circle</div>
	);
}

//사각형 함수
const Square = () => {
	return (
		<div style={}>Square</div>
	);
}

const App = () => {
  return (
    <>
     <Circle />
     <Square></Square>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//style 변수 안만들고 바로 div에 넣는 방법
//사각형 함수
const Square = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "pink",
        margin: "20px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        "font-weight": "bold"
      }}
    > //여기까지 div 시작
      Square
    </div>
  );
};

const App = () => {
  return (
    <>
     <Circle />
     <Square></Square>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
