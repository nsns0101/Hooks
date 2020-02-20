import React from "react";

const useConfirm = (message = "", delete_yes, delete_no) => {
  //callback가 function이 아니면 아무것도 리턴을 하지 않음
  if (typeof delete_yes !== "function" && delete_no !== "function") {
    return;
  }

  const confirmAction = () => {
    //window.confirm = 경고창과 비슷한 예, 아니오를 누를 수 있는 창
    if (window.confirm(message)) {
      //예를 누르면
      delete_yes(); //callback함수가 실행
      //=> callback && 는 결과적으로 deleteWorld함수
    } else {
      delete_no();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world..."); //삭제 : 예
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
