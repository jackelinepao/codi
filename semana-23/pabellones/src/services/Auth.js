import axios from 'axios';
import { URL_BACKEND } from './../environments/environments'

export class AuthService {
    token;

    constructor() {
        this.cargarToken();
    }

    cargarToken() {
        if (localStorage.getItem("token")) {
            this.token = localStorage.getItem("token");
        }
    }
    login = (email, password) => {
        let password_enc = window.btoa(password);
        let contenido = {
            usu_email: email,
            usu_pass: password_enc
        };

        let misHeaders = {
            "Content-Type": "application/json"
        };
        let rpta = axios.post(`${URL_BACKEND}api/Usuario/loggin`, contenido, { headers: misHeaders });
        return rpta;
    }
    isLogged() {
        if (this.token) {
            try {
                let payload = this.token.split('.')[1];
                let payload_dec = JSON.parse(window.atob(payload));
                if (payload_dec.expiresIn > (new Date().getHours()) / 1000) {
                    return true;
                } else {
                    localStorage.removeItem("token");
                    return false;
                }
            } catch {
                localStorage.removeItem("token");
                return false;
            }

        } else {
            console.log("Nel no hay token");
            return false;
        }
    }
    guardarToken(token) {
        this.token = token;
        localStorage.setItem("token", token);
    }

    cerrarSesion() {
        this.token = null;
        localStorage.removeItem("token");
    }
}