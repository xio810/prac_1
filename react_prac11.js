console.clear();

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const RecordForm = () => {
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px"
      }}
    >
      <div>
        <span>숫자 : 10</span> <button>증가</button> <button>감소</button>{" "}
        <button>취소</button>
      </div>
      <hr />
      <div>
        <button>기록</button> <button>초기화</button>
      </div>
    </div>
  );
};

const RecordList = () => {
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "10px"
      }}
    >
      <span>기록없음</span>
    </div>
  );
};

const RecordApp = () => {
  return (
    <div style={{ display: "inline-block", padding: "10px" }}>
      <RecordForm />
      <RecordList />
    </div>
  );
};

const App = () => {
  return <RecordApp />;
};

ReactDOM.render(<App />, document.getElementById("root"));
