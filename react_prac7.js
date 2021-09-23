import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const App = () => {
  const [recordedNums, setRecordedNums] = useState([]);
  const [num, setNum] = useState(0);

  const saveRecord = () => {
    setNum(0);
    // 아래 2줄은 안됩니다.(불변성 위배)
    /*
    recordedNums.push(num);
    setRecordedNums(recordedNums);
    */
    setRecordedNums([...recordedNums, num]);
  };

  return (
    <>
      <div>숫자 : {num}</div>
      <div>
        <button onClick={() => setNum(num + 1)}>증가</button>
        <button onClick={saveRecord}>기록</button>
      </div>
      <div>{JSON.stringify(recordedNums)}</div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
