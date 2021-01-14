import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './src/reducers';
import MainWrapper from './src/navigators';
import route from './src/common/route';
import axios from 'axios';

const Root = () => {
  const store = () => {
    axios.defaults.baseURL = route.url;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    return createStore(AppReducer, applyMiddleware(thunk));
  };

  return (
    <Provider store={store()}>
      <MainWrapper />
    </Provider>
  );
};

export default Root;
