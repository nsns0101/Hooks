//useFadeIn
//서서히 나타나는 것
import React, { useEffect, useRef } from "react";

//duration => 나타내는 속도, delay함수가 일어나는 속도
const useFadeIn = (duration = 1, delay = 0) => {
  // if (typeof duration !== "number" || typeof delay !== "number") {
  //   return;
  // }
  const element = useRef(); //element는 실행시킨 함수의 ref태그를 가르킴?
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      //transition = 애니메이션 효과
      //style=`transition: `opacity ${duration}s ease-in-out ${delay}s`
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`; //드러나는 속도
      //style=`opacity:${duration}`
      current.style.opacity = 1; //불투명도
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 3);
  return (
    <div className="App">
      {/* opacity는 불투명도  0이면 안보임 */}
      {/* <h1 ref={fadeInH1.ref} style={fadeInH1.style}> hello</h1>*/}
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalala</p>
    </div>
  );
};

export default App;
