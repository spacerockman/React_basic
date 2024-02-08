
import { useRef, useState } from "react";
import moment from 'moment';
import dayjs from "dayjs";

import './App.scss'
import _, { random } from 'lodash'
import classNames from 'classnames';
import sasukeAvatar from './images/sasukeavatar.png';
import { v4 as uuidv4 } from 'uuid';


// comment list
const list = [
    {
        rpid: 3,
        user: {
            uid: '1231231233',
            avatar: sasukeAvatar,
            name: '自分',
        },
        content: '笑',
        ctime: '10-18 08:15',
        like: 88,
    },
    {
        rpid: 2,
        user: {
            uid: '23232322',
            avatar: sasukeAvatar,
            name: 'テスト太郎',
        },
        content: 'よっ',
        ctime: '10-18 08:35',
        like: 28,
    },
    {
        rpid: 4,
        user: {
            uid: '323232',
            avatar: sasukeAvatar,
            name: 'テスト太郎２',
        },
        content: 'しゃっ',
        ctime: '10-18 07:15',
        like: 1,
    }
]

const user = {
    uid: '1231231233',
    avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnordic.ign.com%2Favatar-generations&psig=AOvVaw2O6DiRACwbiCOauXMFfxU9&ust=1707096802493000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKji66XFkIQDFQAAAAAdAAAAABAE',
    uname: '自己'
}

const tabs = [
    {type: 'hot', text: 'hot'},
    {type: 'time', text: 'lastest'},
]

function A({onGetMsg}){
    const msg = "this is the name of A"
    return (
        <div>
            This is A component
            <button onClick={()=>onGetMsg(msg)}>A click</button>
        </div> 
    )
}

function B({msg}){
    return (
        <div>
            <h1>This is B component:</h1>
            {msg}
        </div>
    )
}

function App() {
 const [msg, setMsg] = useState('');
 const getMsg = (msg) => {
    setMsg(msg)
 }
  return (
    <div className="App">
        <A onGetMsg={getMsg}/>
        <B msg={msg}></B>
    </div>
  );
}

export default App;
