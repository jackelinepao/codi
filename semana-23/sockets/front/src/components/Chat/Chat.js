import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const[message,setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const URL_BACK = 'localhost:5000'
    useEffect(()=>{
        //locationsearch buscar los parametros de la ruta
        const {name, room} = queryString.parse(window.location.search);
        
        socket = io(URL_BACK);

        setName(name);
        setRoom(room);
        
        // socket.emit('join', {name:name, room:room}, ({error})=>{
        //     alert(error)
        // });
        socket.emit('join', {name:name, room:room}, ()=>{
        });
        return()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },[URL_BACK, window.location.search]);      
    
    useEffect(()=>{
        socket.on('message',()=>{
            setMessages([...messages,message]);
        },[messages]);
    })

    const sendMessage = (event)=>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage', message, ()=>setMessage(''));
        }
    }

    console.log("ultimo mensaje enviado", message);
    console.log("lista de mensajitos", messages);
    
    
    return (
        <input type="text" value={message} onChange={(event)=> setMessage(event.target.value)} onKeyPress={(event)=> event.key ==='Enter'?sendMessage(event): null} name="" id=""/>
    );
}
 
export default Chat;