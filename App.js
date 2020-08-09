import React, { useState } from 'react';

import Navigation from './Components/src/Navigation/Navigation.js'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './Components/src/reducers'


const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
export default App;
