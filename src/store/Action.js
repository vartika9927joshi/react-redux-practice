// import { useDispatch } from 'react-redux';
// const dispatch = useDispatch();

export const increment = (dispatch) => {
  const res = dispatch({ type: 'INCREMENT' }); // hum dispatch ko component se hi q bhejte hain ? yha p b to directly import kr skte hain .
  console.log('res of dispatch increement in Action.js >> ', res);
  return res;
};
export const decrement = (dispatch) => {
  return dispatch({ type: 'DECREMENT' });
};

export const increement = (dispatch) => {
  return dispatch;
};
