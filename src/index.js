import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DialogItem from "./Components/Dialogs/DialogItem/DialogItem";
import Message from "./Components/Dialogs/Messages/Messages";


let dialogs = [
    {id: 1, user: 'Andrew'},
    {id: 2, user: 'Igor'},
    {id: 3, user: 'Sergey'},
    {id: 4, user: 'Irina'},
    {id: 5, user: 'Zhop'}
]
let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Ti mne bil kak brat!'},
    {id: 3, message: 'Tut zhop'},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
