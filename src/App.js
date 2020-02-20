import React, { useState, useEffect } from "react";

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    //document.querySelector = 특정 id나 class 상관없이 element를 찾음
    const htmlTitle = document.querySelector("title"); // <title>Loading...</title>
    htmlTitle.innerText = title; // Loading...
  };

  //title 값이 바뀌면 updateTitle함수 실행
  useEffect(updateTitle, [title]);

  return setTitle;
};

const App = () => {
  const titleUpdator = useTitle("Loading...");
  setTimeout(function() {
    return titleUpdator("Home");
  }, 2000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
