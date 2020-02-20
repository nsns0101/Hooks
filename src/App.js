import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const potato = useRef();
  setTimeout(() => potato.current.focus(), 2000);

  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="la"></input>
    </div>
  );
};

export default App;
