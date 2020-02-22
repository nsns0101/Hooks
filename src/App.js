//useNotification
//사용자에게 알림을 주는 함수
//모바일에선 진동도 줄 수 있음
//참고 : https://developer.mozilla.org/ko/docs/Web/API/notification
//크롬으로 할 경우 주소옆에 i 모양에서 알림허용을 설정할 것
import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    console.log("oj");
    return;
  }

  const fireNotification = () => {
    //denied = 사용자가 알림 표시를 거절
    //granted = 사용자가 알림 표시를 허용
    //default = 사용자의 선택을 알 수 없기 때문에 브라우저가 거절한 상태의 값으로 작동

    //권한 허용상태가 아니면
    if (Notification.permission !== "granted") {
      console.log("권한 허용을 요청");
      //알림을 허용을 요청
      Notification.requestPermission().then(permission => {
        //수락시
        if (permission === "granted") {
          new Notification(title, options);
        }
        //거절시
        else {
          return;
        }
      });
    }
    //권한 허용상태이면
    else {
      console.log("권한 허용된 상태");
      new Notification(title, options);
    }
  };

  return fireNotification;
};

const App = () => {
  const tiggerNotification = useNotification("Can I steal your kim", {
    body: "I Love Kimchi dont you"
  });

  return (
    <div className="App">
      <button onClick={tiggerNotification}>Hello</button>
    </div>
  );
};

export default App;
