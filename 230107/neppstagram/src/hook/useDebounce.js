import { useEffect, useState } from 'react';

// delay 이내의 입력값은 반영을 안하고 그 이상 경과하면 데이터를 요청
export default function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    //{delay}ms 이전에 또 다른값을 치면, 뒷정리함수가 실행되므로 무효가 됨
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debounceValue;
}
