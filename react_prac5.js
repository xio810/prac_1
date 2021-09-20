import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const App = () => {
  const [recordedNum, setRecordedNum] = useState(null);
  const [num, setNum] = useState(0);

  return (
    <>
      <div>숫자 : {num}</div>
      {recordedNum == null ? (
        <div>기록없음</div>
      ) : (
        <div>
          기록된 숫자 : {recordedNum}{" "}
          <button onClick={() => setRecordedNum(null)}>삭제</button>
        </div>
      )}
      <div>
        <button onClick={() => setNum(num + 1)}>증가</button>
        <button
          onClick={() => {
            setRecordedNum(num);
            setNum(0);
          }}
        >
          기록
        </button>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
