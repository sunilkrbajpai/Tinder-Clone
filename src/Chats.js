import React from 'react';
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat name="Mark"
            message="Yo whats up"
            timestamp="40 sec ago"
            profilePic="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />

            <Chat name="Sarah"
            message="Yo whats up"
            timestamp="40 sec ago"
            profilePic="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            />
        </div>
    )
}

export default Chats
