import defaultAxios from "axios";
import React, { useState, useEffect } from "react";

//axiosInstancd는 기본적으로 axios
//axios의 기본적인 사용법은(method생략시 get)
/*  axios({
        url : 'url주소',
        method : 'get'
    })
*/
//또는 axios.get('url주소')
const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  console.log(options); //App.js에서 보낸 url이 담김

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(new Date()); //계속 바뀌는 랜덤값(useEffect참조)
  };

  useEffect(() => {
    axiosInstance(options) //axios로 App.js에서 보낸 url 요청
      //이상없으면 data를 줌(error : null)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      //에러가 있으면 에러를 출력(data : null)
      .catch(error => {
        setState({
          ...state,
          loading: false,
          error
        });
      });
  }, [trigger]);

  return { ...state, refetch };
};

export default useAxios;
