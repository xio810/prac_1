import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
//a<1 ? true : false
const App = () => {
  const [num, setNum] = useState(0);
  // const [recordedNums, setRecordedNums] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const recordedNums = numbers.length > 0;

  const saveRecord = () => {
    if (num == 0) return;

    setNum(0);
    // setRecordedNums(true);
    setNumbers([...numbers, num]);
  };

  const RecordList = recordedNums ? (
    <div>
      <h1>record</h1>
      <ul>
        {numbers.map((num) => (<li>{num}</li>))}
      </ul>
    </div>
  ) : (
    <div>
      <ul>
        <li>기록없음</li>
      </ul>
    </div>
  );

  const clearRecord = () => {
    setNum(0);
    setNumbers([]);
  }

  return (
    <>
      <div>현재숫자 : {num}</div>
      <div>
        <button onClick={() => setNum(num + 1)}>증가</button>
        <button onClick={() => setNum(num - 1 > 0 ? num - 1 : 0)}>감소</button>
        <button onClick={() => setNum(0)}>취소</button>
        <hr />
        <button onClick={saveRecord}>기록</button>
        <button onClick={clearRecord}>초기화</button>
        {RecordList}
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
