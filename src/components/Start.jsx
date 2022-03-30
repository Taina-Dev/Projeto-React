import React from 'react';
import logo from './logo.svg';
import {useHistory} from 'react-router-dom'
import './Start.css';
import Button from './Button';
import App from '../App';
import Task from './Task';
import Header from './Header';

const Start = () => {

    const history = useHistory();

    const handleStartClick = () => {
       history.push('k')
    }
    return (
         <div className="Start">
         <header className="Start-header">
      <img src={logo} className="Start-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      
             <Button onClick={handleStartClick}>Click</Button>
          
       
    </header>
  </div> );
}
 
export default Start;