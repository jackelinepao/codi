import {Request, Response, NextFunction} from 'express';

var jwt = require('jsonwebtoken');

export let verificarToken = (token:string)=>{
    try {
        let data = jwt.verify(token,'codigo6', {algorithm:'RS256'});
        return data;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}
export let guard = (req:Request, res:Response, next: NextFunction)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization.split(" ")[1];//en esta funcion se separa el autor que viene "sss 123456.123456.123456"
        let data = verificarToken(token);
        if(data){
            next();
        }else{
            res.status(401).json({
                message: 'error',
                content: 'La token no es valida o ya expiro'
            })
        }
    }else{
        res.status(401).json({
            message: 'Error',
            content: 'Falta el token'
        })
    }
}