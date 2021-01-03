import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import allReducers from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

export const store = createStore(allReducers, applyMiddleware(thunk));
//store.subscribe(() => {console.log('On Index'+store.getState().results.results)})


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
