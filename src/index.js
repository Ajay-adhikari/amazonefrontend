import React   from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import store from './store';
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./components/context/ContextProvider"
import { SignupForm } from './components/title/Title';




ReactDOM.render(
  
  <ContextProvider>
    <SignupForm></SignupForm>
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
      </ContextProvider>
  ,
  document.getElementById('root')
);