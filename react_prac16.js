/* TODO
- [x] 수정버튼
- [x] 리스트아이템 컴포넌트 화
- [x] 수정버튼누르면 모드 변경
- [x] 수정UI가 취소되면 원상복구
- [x] 수정UI에서 데이터 수정
*/

console.clear();

import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const RecordForm = ({ recordedNums, setRecordedNums }) => {
  const [num, setNum] = useState(0);

  const increaseNum = () => setNum(num + 1);

  const decreaseNum = () => {
    if (num - 1 < 0) return;

    setNum(num - 1);
  };

  const cancelModifyNum = () => setNum(0);

  const saveRecord = () => {
    if (num == 0) return;

    setRecordedNums([...recordedNums, num]);
    setNum(0);
  };

  const clearRecords = () => {
    setNum(0);

    if (recordedNums.length == 0) return;

    setRecordedNums([]);
  };

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px"
      }}
    >
      <div>
        <span>숫자 : {num}</span> <button onClick={increaseNum}>증가</button>{" "}
        <button onClick={decreaseNum}>감소</button>{" "}
        <button onClick={cancelModifyNum}>취소</button>
      </div>
      <hr />
      <div>
        <button onClick={saveRecord}>기록</button>{" "}
        <button onClick={clearRecords}>초기화</button>
      </div>
    </div>
  );
};

const RecordList = ({ recordedNums, setRecordedNums }) => {
  let List = <span>기록없음</span>;

  const editRecordedNum = (editIndex, newNumber) => {
    setRecordedNums(
      recordedNums.map((recordedNum, index) =>
        editIndex == index ? newNumber : recordedNum
      )
    );
  };

  const delRecordedNum = (delIndex) => {
    setRecordedNums(recordedNums.filter((el, index) => index != delIndex));
  };

  if (recordedNums.length > 0) {
    List = (
      <ul>
        {recordedNums.map((recordedNum, index) => (
          <RecordListItem
            key={index}
            index={index}
            recordedNum={recordedNum}
            editRecordedNum={editRecordedNum}
            delRecordedNum={delRecordedNum}
          />
        ))}
      </ul>
    );
  }

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "10px"
      }}
    >
      {List}
    </div>
  );
};

const RecordListItem = ({
  recordedNum,
  delRecordedNum,
  editRecordedNum,
  index
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newRecordedNum, setNewRecordedNum] = useState(recordedNum);

  const _editRecordedNum = () => {
    editRecordedNum(index, newRecordedNum);
    setEditMode(false);
  };

  const cancelEdit = () => {
    setNewRecordedNum(recordedNum);
    setEditMode(false);
  };

  return (
    <li>
      {editMode ? (
        <>
          <span>
            <input
              style={{ width: "50px" }}
              type="number"
              value={newRecordedNum}
              onChange={(e) => setNewRecordedNum(e.target.value)}
            />
          </span>
          &nbsp;
          <button onClick={_editRecordedNum}>수정완료</button>
          &nbsp;
          <button onClick={cancelEdit}>수정취소</button>
        </>
      ) : (
        <>
          <span>{recordedNum}</span>
          &nbsp;
          <button onClick={() => setEditMode(true)}>수정</button>
        </>
      )}
      &nbsp;
      <button onClick={() => delRecordedNum(index)}>삭제</button>
    </li>
  );
};


/////////
const RecordApp = () => {
  const [recordedNums, setRecordedNums] = useState([]);

  return (
    <div style={{ display: "inline-block", color: "blue", padding: "10px" }}>
      <RecordForm
        recordedNums={recordedNums}
        setRecordedNums={setRecordedNums}
      />
      <RecordList
        recordedNums={recordedNums}
        setRecordedNums={setRecordedNums}
      />
    </div>
  );
};

const App = () => {
  return <RecordApp />;
};

ReactDOM.render(<App />, document.getElementById("root"));
