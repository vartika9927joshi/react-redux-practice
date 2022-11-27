const initialState = {
  // kya ye initial state humko tb b deni pdegi jb hum real project mai api se data laa rhe honge ?
  count: 0,
};
export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count + 1,
      };
    default: {
      return state;
    }
  }
};
