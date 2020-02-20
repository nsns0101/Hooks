import React, { useState, useEffect } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  const sayHello = () => console.log("hello");

  //componentDidMount와 componentDidUpdate의 역할 + useEffect가 return값이 function임(ComponentWillUnMount의 역할)
  // useEffect(function,[dependency])
  useEffect(sayHello, [number]); // componentDidMount + [number] 값이 바뀔때만 실행되게
  // useEffect(sayHellol, []); //componentDidMount만 실행
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
