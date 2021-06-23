import React from 'react';
import { useSelector } from 'react-redux';

const Chat = ()=>{
    const user = useSelector(state=>state.authReducer.user);
    return (
        <h1>chat {user.name}</h1>
    )
}
export default Chat;