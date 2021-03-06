import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

// import your reducers

import { allReducers } from "./reducers"; //no need to add the index, becuz webpack automatically looks for the index.js file

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  allReducers:allReducers
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));


const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/query">
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  
);


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter basename="/query">
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
reportWebVitals();
registerServiceWorker();
=======

import { createStore, combineReducers } from "redux"; //step 1
import { allReducers } from "./reducers"; //no need to add the index, becuz webpack automatically looks for the index.js file
import { Provider } from "react-redux";
const STORE = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <BrowserRouter basename="/query">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 3b8a904f6b3f8b4418d888849f2f108c0f675259
