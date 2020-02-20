import React, { useState, useEffect, useRef } from "react";

const useClick = onClick => {
  console.log("2"); //const title = useClick(sayHello); 코드로 실행
  //유효성검사
  // if (typeof onClick !== "function") {
  //   return;
  // }
  const element = useRef(); // 밑의 <h1 ref={title}>Hi</h1>가 얘를 가르킴
  console.log(element);
  if (element.current) {
    console.log("zzz");
  }
  useEffect(() => {
    console.log("4"); //App의 return에서 html이 그려짐에 따라 실행

    //componentDidMount, componentWillUpdate할 때
    //밑의 return문을 보면 이벤트를 다시 삭제하는데
    //그 이유는 component가 mount되지 않았을 때 eventListener이 배치되지 않게 하기 위해
    if (element.current) {
      console.log("5"); //이것도 App의 return에서 html이 그려짐에 따라 실행하는 듯
      //element.current = h1
      //h1태그 클릭시 eee함수 실행
      element.current.addEventListener("click", onClick);
    }

    return () => {
      //componentWillUnMount 할 때
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

const App = () => {
  console.log("1"); //export default로 실행
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  console.log("3"); //23번째 줄 종료 후 실행

  const a = () => {
    console.log("a");
  };
  return (
    <div className="App">
      {/* ref속성은 리액트에서 DOM에 직접적인 접근을 할 때 쓰임  */}
      {/* 1. title은 h1에 접근을 할 수 있음 */}
      <h1 ref={title}>Hi</h1>
      <h2 ref={a}>hh</h2>
    </div>
  );
};

export default App;
