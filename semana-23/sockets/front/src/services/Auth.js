import axios from 'axios';

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
        let rpta = axios.post(`${URL_BA}`)
    }
}