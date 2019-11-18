import React ,{useState} from 'react';
import {Link} from 'react-router-dom';

const Join =()=>{
    const [name, setName] = useState('');
    const [room,setRoom] = useState('');
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <h2 className="mb-4 text-center">Ingrese</h2>
                    <input type="text" name="" id="" className="form-control mb-3" placeholder="Ingrese su Nombre" onChange={(event)=>setName(event.target.value)}/>
                    <input type="text" name="" id="" className="form-control mb-3" placeholder="Ingrese la sala" onChange={(event)=>setRoom(event.target.value)}/>
                    <Link onClick={(event)=> (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button className=" btn btn-primary btn-block" type="submit">Ingresar</button>
                    </Link>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}
export default Join;