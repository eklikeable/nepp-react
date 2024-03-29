22.12.11

### 💡"함수형 업데이트"란?

리액트에서 setState를 사용하여 상태를 업데이트 할 경우, 업데이트 된 상태는 즉시 반영되지 않는다.  
왜냐하면 setState는 비동기적으로 작동하기 때문에, 리렌더링이 된 후에야 비로소 업데이트된 state가 반영된다.

여러번 setState를 만나게 되면 batching(일괄처리)하여 작업을 한다. 매번 호출 순서대로 바로 업데이트 하지 않고  
인자로 전달된 객체들을 하나로 합친 뒤에 상태를 업데이트 하기 때문이다.

\*batching : 전달된 오브젝트들을 하나로 합치는 작업. object composition 이라고도 불린다.  
객체가 동일한 키를 가지고 있다면 가장 마지막에 전달된 객체의 키값이 덮어쓰여진다.

비동기적으로 작동하는 속성은 여러개의 state를 다룰 때 퍼포먼스 측면에서 유리하다.  
동기적으로 작동했다면, state1 → state2 이렇게 순차적으로 업데이트가 될 것이기 때문이다.

(이러한 특성 때문에, update된 state를 바로 반영해야 할 때, 우리는 useEffect를 사용한다.)

이를 해결하기 위해 함수형 업데이트(functional update)를 사용할 수 있다.  
즉, setState에 값을 그대로 전달하는 것이 아니라 함수를 전달하는 것이다.  
(=> setState를 동기적으로 사용할 수 있게 된다.)

객체가 아닌 함수형 setState가 호출되면 merge 할 객체가 없기 때문에 호출된 순서대로 함수를 큐에 넣는다.  
그 후에 큐의 각 함수를 호출하여 함수형 setState의 이전 상태를 전달하여 업데이트 하는 것이다.  
이 말은, 상태를 업데이트하는 함수를 외부에 선언해놓고 가져다 쓰기만해도 된다는 소리다.

함수형 업데이트는 useCallback과 함께 props로 전달된 함수를 최적화 할 때도 유용하게 쓰인다.

참고 :  
https://dodokim.medium.com/setstate-%EB%A5%BC-%ED%95%A8%EC%88%98%ED%98%95%EC%9C%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-763402cbc3e5  
https://www.daleseo.com/react-hooks-use-callback/
