//useNetwork
//네비게이터가 온라인 또는 오프라인 되는 것을 방지
//네트워크 상태가 Online인지 Offline인지를 판단
import React, { useEffect, useState } from "react";

//네트워크를 판단하는 함수
const useNetwork = onChange => {
  //navigator.onLine는 브라우저의 온라인 상태를 반환함
  console.log(navigator.onLine); //온라인이면 true를 반환
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange === "function") {
      //onChange는 App의 handleNetworkChange함수
      onChange(navigator.onLine); //true면 console.log("We juse went online"); 실행
    }
    setStatus(navigator.onLine); //네트워크값이 바뀌는 것을 감지
  };

  useEffect(() => {
    window.addEventListener("online", handleChange); //window에 online이벤트 생성
    window.addEventListener("offline", handleChange); //window에 offline이벤트 생성

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

const App = () => {
  const handleNetworkChange = online => {
    console.log(online ? "We juse went online" : "We are offline");
  };
  const online = useNetwork(handleNetworkChange);

  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
