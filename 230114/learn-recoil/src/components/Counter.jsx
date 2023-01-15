import { useDispatch, useSelector } from 'react-redux';
import {
  decre,
  DECREASE,
  decrement,
  incre,
  INCREASE,
  increment,
} from '../state/counter';

function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(incre({ amount: 2 }))}>+2</button>
      <button onClick={() => dispatch(decre({ amount: 10 }))}>-10</button>
    </div>
  );
}

export default Counter;
