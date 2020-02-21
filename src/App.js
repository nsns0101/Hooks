//useFullscreen
//이미지를 풀스크린으로 만들어주는 함수
import React, { useEffect, useState, useRef } from "react";

const useFullscreen = callback => {
  const element = useRef();
  let fullScreen = false; //풀스크린인지의 여부(처음에 exit fullscreen버튼을 누르면 오류가 뜸을 방지)
  //풀스크린으로 만들어주는 함수
  const triggerFull = () => {
    if (element.current) {
      fullScreen = true; //풀스크린
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };

  //풀스크린을 빠져나가는 함수
  const exitFull = () => {
    if (fullScreen) {
      document.exitFullscreen(); //왜 element.current.exitFullscreen(); 이 아닌지는 몰라도 됨
      fullScreen = false;
    }
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };

  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFulls = isFull => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          ref={element}
          src="https://akns-images.eonline.com/eol_images/Entire_Site/201587/rs_1024x759-150907153624-1024.nicole-arbour.cm.9715.jpg"
        />
        <button onClick={triggerFull}>Make FullScreen</button>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
    </div>
  );
};

export default App;
