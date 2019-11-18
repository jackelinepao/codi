import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const URL_BACK = 'localhost:5000'
    useEffect(()=>{
        //locationsearch buscar los parametros de la ruta
        const {name, room} = queryString.parse(window.location.search);
        
        socket = io(URL_BACK);

        setName(name);
        setRoom(room);
        
        socket.emit('join', {name:name, room:room}, ({error})=>{
            alert(error)
        });
    },[URL_BACK, window.location.search]);          

    return (
        <div>Chat</div>
    );
}
 
export default Chat;