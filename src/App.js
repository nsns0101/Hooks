//usePreventLeave
//버튼을 누르고
//창을 닫으려고하면 닫으시겠습니까?
//새로고침을 하면 새로고침하시겠습니까?
import React from "react";

const uesPreventLeave = () => {
  const listener = event => {
    event.preventDefault(); //이벤트를 취소할 수 있는 경우 이벤트의 전파를 막지않고 그 이벤트를 취소함
    event.returnValue = false; //event.returnValue가 true든 false든 상관없이 이 문장이 없으면 이벤트를 실행하지 않음
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = uesPreventLeave();

  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
};

export default App;
