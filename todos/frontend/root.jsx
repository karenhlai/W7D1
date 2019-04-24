import React from 'react';
import App from './components/app';
import { Provider } from 'react-redux';

const Root = (props) => {
  // debugger 
  return (
  <Provider store={props.store}>
    <App /> 
  </Provider>
)};

export default Root;