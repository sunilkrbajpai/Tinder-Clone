import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import "./ChatScreen.css";

function ChatScreen() {
    const [input,setInput]=useState('');
    const [messages,setMessages]=useState([{
        name:'Ellen',
        image:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        message:'Whats up'
    },
    {
        name:'Ellen',
        image:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        message:'How is it going'
    },
    {
        message:"I am fine!"
    }
])

const handleSend=e=>{
    e.preventDefault();
    setMessages([...messages,{message:input}]);
    setInput("");
}
    return (
        <div className="chatScreen">
            <p className="chatScreen__timeStamp">You matched with ELLEN on 10/07/20</p>
            {messages.map((message)=>
                message.name?(
                <div className="chatScreen__message">
                    <Avatar className="chatScreen__image"
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                )
            :(
                <div className="chatScreen__mymessage">
                    <p className="chatScreen__mytext">{message.message}</p>
                </div>
            )
                
            )}
                <form className="chatScreen__input">
                    <input className="chatScreen__inputfield"
                    placeholder="Type a message..." value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    type="text"
                    />
                    <button onClick={handleSend} className="input__button">Send</button>
                </form>

        </div>
    )
}

export default ChatScreen;
