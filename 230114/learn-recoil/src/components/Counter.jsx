import { useDispatch, useSelector } from 'react-redux';
import { DECREASE, decrement, INCREASE, increment } from '../state/counter';

function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(decrement(10))}>-1</button>
    </div>
  );
}

export default Counter;
