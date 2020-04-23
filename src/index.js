import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import './index.css';
import * as serviceWorker from './serviceWorker';

function formatName(user) {
  return user.firstName + '' + user.lastName;
}

const user = {
  firstName: 'vae',
  lastName: 'chang'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  
  <div>
     {element}
     {/* //所有 React 组件都必须像纯函数一样保护它们的 props 不被更改 */}
     <Welcome name="vae"/>
  </div>,
 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
