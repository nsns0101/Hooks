//useAxios
//
//크롬 웹스토어에서 Allow CORS: Access-Control-Allow-Origin설치 후 ON하기
import React from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json"
  });
  // console.log(
  //   `Loading : ${loading}\n data : ${JSON.stringify(data)}\n  error : ${error}`
  // );
  console.log(`Loading : ${loading}\n data : ${data}\n  error : ${error}`);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refecth</button>
    </div>
  );
};

export default App;
