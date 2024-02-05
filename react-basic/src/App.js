
import { useRef, useState } from "react";
import moment from 'moment';


import './App.scss'
import _, { random } from 'lodash'
import classNames from 'classnames';
import sasukeAvatar from './images/sasukeavatar.png';

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


function App() {
    const [commentList, setCommentList] = useState(list)

    const handleItem = (id) => {
        console.log(id)
        setCommentList(commentList.filter(item => (item.rpid !== id)))
    }
    const [type, setType] = useState('hot')
    const handleTabChange = (type) => {
        console.log(type)
        setType(type)
        if (type === 'hot') {
            // ordered by likes
            setCommentList(_.orderBy(commentList, 'like', 'desc'))
        } else {
            // ordered by time
            setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
        }
    }

    const [value, setValue] = useState('')

    const inputRef = useRef(null)
    const showDom = () => {
        console.dir(inputRef.current);
    }

    // コメントの内容
    const [content, setContent] = useState('')
    let currentDate = moment().format('MM-DD hh:mm')
    const handleClickContent = () => {
        console.log(content)
        setCommentList([
            ...commentList,
            {
                rpid: (Math.random() * 1000000).toString(),
                user: {
                    uid: Math.random() * 9999999,
                    avatar: sasukeAvatar,
                    name: '自分',
                },
                content: content,
                ctime: currentDate,
                like: Math.floor(Math.random() * 10000),
            },
        ])
    }

  return (
    <div className="app">
      <div className="reply-navigation">
        <ul>
            <li>
                <span>コメント</span>
                <span>{10}</span>
            </li>
            <li>
                    {tabs.map(item => 
                         <span key={item.type} 
                            onClick = {() => handleTabChange(item.type)}
                            className = {classNames('nav-item', {active : item.type === type})}
                         >{item.text}</span>
                    )}
               
            </li>
        </ul>
       
      </div>
        
      <div className="reply-input">
        <div className="user-div">
            <img alt="" src={sasukeAvatar}/>
            <span>ユーザー名: {user.uname}</span><br/>
    
            <textarea
                placeholder="入力してください"
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            /><br/>
            <button onClick={handleClickContent}>送信</button>
        </div>
      </div>


      <div className="reply-list">
        {/**コメント欄 */}
        {commentList.map(item => (
            <div key={item.rpid}>
                {/**avator */}
                <div>
                    
                    <img alt="" src={sasukeAvatar}/>
                   
                </div>
                <div className="user-div">
                    <span>ユーザー名: {item.user.name}</span>
                    <span>コメント: {item.content}</span>
                    <span>時間: {item.ctime}</span>
                    <span>いいね: {item.like}</span>
                    <span className="delete-btn" onClick={() => handleItem(item.rpid)}>
                        削除
                    </span>
                </div>
            </div>
        ))}
      </div>
      <div>
        {/*  */}
        <input
            value = {value}
            onChange = {(e) => setValue(e.target.value)}
            type = 'text'
            ref={inputRef}
        />
        <span>{value}</span>
      </div>

      {/* 要素 取得 */}
        <button onClick={showDom}>押す</button>
    </div>
  );
}

export default App;
