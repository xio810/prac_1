import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
//a<1 ? true : false
/*
숫자증가
  현재숫자
    const num 생성
  증가버튼
    setNum (num + 1)
  감소버튼
    삼항연산자 (num - 1 > 0 ? 감소 : 0 )
  취소버튼 -> 다시 0으로
기록버튼 / 초기화버튼
  기록을 누르면 숫자는 다시 0
  기록 onClick 함수 빼기
  recordedNums에 [] 값 넣었을 때 있음 없음 출력
  [] 값에 따른 다른 결과 출력을 함수로 빼기
  li 에 map 추가
  saveRecord에 값 넣을 수 있게 [] 수정
  초기화 clearRecord 함수생성

*/
const App = () => {
  const [num, setNum] = useState(0);
  const [recordedNums, setRecordedNums] = useState([]);

  const saveRecord = () => {
    if (num == 0) return;
    setNum(0);
    setRecordedNums([...recordedNums, num]);
  };

  const recordList =
    recordedNums.length > 0 ? (
      <div>
        <h1>RECORD</h1>
        <ul>
          {recordedNums.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
    ) : (
      <div>없음</div>
    );

  const clearRecord = () => {
    setNum(0);
    setRecordedNums([]);
  };

  return (
    <>
      <div>현재숫자 : {num} </div>
      <div>
        <button onClick={() => setNum(num + 1)}>증가</button>
        <button onClick={() => setNum(num - 1 > 0 ? num - 1 : 0)}>감소</button>
        <button onClick={() => setNum(0)}>취소</button>
        <hr />
        <button onClick={saveRecord}>기록</button>
        <button onClick={clearRecord}>초기화</button>
      </div>
      {recordList}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
