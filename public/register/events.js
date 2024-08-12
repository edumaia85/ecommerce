import { realizaRegistro } from './register.js';

const btLogin = document.querySelector('form button');
btLogin.addEventListener('click', (e) => {
    e.preventDefault();
    realizaRegistro();
});
