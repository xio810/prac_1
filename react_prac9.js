import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const App = () => {
  const [recordedNums, setRecordedNums] = useState([]);
  const [num, setNum] = useState(0);

  const saveRecord = () => {
    if (num == 0) return;

    setNum(0);
    // 아래 2줄은 안됩니다.(불변성 위배)
    /*
    recordedNums.push(num);
    setRecordedNums(recordedNums);
    */
    setRecordedNums([...recordedNums, num]);
  };

  let recordedList = <div>기록없음</div>;

  if (recordedNums.length > 0)
    recordedList = (
      <div>
        <h1>기록</h1>
        <ul>
          {recordedNums.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
    );

  return (
    <>
      <div>숫자 : {num}</div>
      <div>
        <button onClick={() => setNum(num + 1)}>증가</button>
        <button onClick={() => setNum(num - 1 > 0 ? num - 1 : 0)}>감소</button>
        <button onClick={() => setNum(0)}>취소</button>
        <hr />
        <button onClick={saveRecord}>기록</button>
      </div>
      {recordedList}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
