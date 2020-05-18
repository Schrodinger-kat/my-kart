import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/stylesheet.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import StorePicker from './Components/StorePicker';
import NotFound from './Components/NotFound';

//<Route path="/store/:storeId" component={App}/>
      
const Root = () =>{
  return(
    <BrowserRouter>
    <Switch>
      <Route path = "/" component={App}/>
      
      <Route path="/store/:storeId" component={App}/>
      <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
