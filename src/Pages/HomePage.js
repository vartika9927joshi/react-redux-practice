import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/Action';

const HomePage = () => {
  console.log('testing data vala');
  // const storeData = useSelector(state => state.CounterReducer.count)
  const dispatch = useDispatch();
  const storeData = useSelector(function (allReducers) {
    console.log('all reducer', allReducers);
    return allReducers.CounterReducer.count;
  });
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          cursor: 'pointer',
        }}
      >
        <button
          className="plus-btn"
          style={{
            width: '150px',
            height: '60px',
            backgroundColor: 'green',
            color: '#fff',
            fontSize: '23px',
            marginRight: '20px',
            cursor: 'pointer',
          }}
          onClick={() => {
            console.log('in increement HomePage.js >> ', increment(dispatch));
          }}
        >
          +
        </button>

        {storeData}

        <button
          className="plus-btn minus"
          style={{
            width: '150px',
            height: '60px',
            backgroundColor: 'red',
            color: '#fff',
            fontSize: '23px',
          }}
          onClick={() => decrement(dispatch)}
        >
          -
        </button>
      </div>
    </>
  );
};

export default HomePage;
