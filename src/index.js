import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Page from './Page';
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

function NumberList(props) {
  const numbers = props.numbers;
  //key 只是在兄弟节点之间必须唯一,不要使用index作为key
  const listItems = numbers.map( (number) => 
      <li key={number.toString()}>
        {number}
      </li>
  );
  return listItems;
}

const numbers = [1,2,3,4,5];


ReactDOM.render(
  <div>
    {element}
    {/* //所有 React 组件都必须像纯函数一样保护它们的 props 不被更改 */}
    <Welcome name="vae" />
    <Clock />
    <Toggle />
    <LoginControl />
    <Page/>
    <NumberList numbers = {numbers}/>
  </div>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
