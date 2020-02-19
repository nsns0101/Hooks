import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setVaule] = useState(initialValue);

  //글 입력이 가능한 이벤트
  const onChange = event => {
    const {
      target: { value }
    } = event;

    let willUpdate = true; //글 업데이트가 가능한지(글 입력이 가능한지)

    //validator이 함수면
    if (typeof validator === "function") {
      willUpdate = validator(value); //validator가 maxLen이라는 함수니까
      console.log(willUpdate); //글이 10글자가 넘어가면 false를 리턴할 것임
    }
    //willUpdate가 true면 (즉, 10글자가 넘어가면 글이 안써짐)
    if (willUpdate) {
      setVaule(value);
    }
  };

  return { value, onChange };
};

const App = () => {
  const maxLen = value => value.length <= 10;
  //const maxLen = value => value.includes("@");      //value안에 @가 있으면 글이 안써지도록
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h2>Hello</h2>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
