//useScroll
//유저 스크롤을 감지 x는 필요없음
import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    console.log(`x : ${window.scrollX} \n y : ${window.scrollY}`);
    setState({
      x: window.scrollX, //화면의 스크롤 x좌표
      y: window.scrollY //화면의 스크롤 y좌표
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll); //스크롤 이벤트 생성

    return () => window.removeEventListener("scroll", onScroll); //스크롤 이벤트 삭제
  }, []);

  return state;
};

const App = () => {
  const { y } = useScroll();

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
};

export default App;
