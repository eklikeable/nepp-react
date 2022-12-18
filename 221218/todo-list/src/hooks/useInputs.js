import { useState } from 'react';

/*
기본적인 입력 폼에 데이터를 넣는 함수는
많은 곳에서 같은 로직으로 사용될 수 있다.
입력폼을 사용하는 모든 컴포넌트에서 해당 로직이 중복되는것을 방지하기 위해
커스텀 훅을 만들어서 사용한다

커스텀 훅의 이름은 use로 시작하는것이 컨벤션이다.

참고 블로그 : https://kyounghwan01.github.io/blog/React/custome-hook/
*/

function useInputs(initialState) {
  const [inputs, setInputs] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const reset = () => {
    setInputs(initialState);
  };

  return [inputs, onChange, reset];
}

export default useInputs;
