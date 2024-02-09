
import { createContext, useContext, useRef, useState } from "react";
import moment from 'moment';
import dayjs from "dayjs";

import './App.scss'
import _, { random } from 'lodash'
import classNames from 'classnames';
import sasukeAvatar from './images/sasukeavatar.png';
import { v4 as uuidv4 } from 'uuid';

 
const MsgContext = createContext() 

function A(){
    return (
        <div>
           <B/>
        </div> 
    )
}

function B(){
    const msg = useContext(MsgContext)
    return (
        <div>
            <h1>This is B component:</h1>
            {msg}
        </div>
    )
}

function App() {
  const msg = "test msg context msg"
  return (
    <MsgContext.Provider value = {msg}>
    <A/>
    </MsgContext.Provider>
  );
}

export default App;
