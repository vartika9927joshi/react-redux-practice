import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider, } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './store/combineReducer';


export const store = configureStore({reducer})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}> 
     <App />
   </Provider>
);


