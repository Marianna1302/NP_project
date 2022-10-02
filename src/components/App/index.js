import React from 'react';
import {
    Link,
    Route,
    Routes
    } from "react-router-dom";
import Header from '../Header';
import TTN from '../Pages/TTN';
import Office from '../Pages/Office';
import Menu from '../Menu';
function App() {

    return (
        <div id="app">
            <Header />
          <div id="menu"> 
         <Menu />
  
          </div>
          
        </div>
    )
}

export default App;
