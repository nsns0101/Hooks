//useBeforeLeave
//마우스 커서가 페이지 공간을 벗어나면 실행하는 함수
import React, { useEffect } from "react";

const useBeforeLeave = onBefore => {
  // if (typeof onBefore !== "function") {
  //   return;
  // }
  const handle = event => {
    // console.log(event); // handle는 mouseleave 이벤트
    console.log(event.clientY); //페이지를 벗어날 때의 마우스 y좌표(위로 벗어나면 숫자가 커짐)
    //마우스의 Y좌표가 위로 벗어났을 때만
    if (event.clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);

    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("Please dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

export default App;
