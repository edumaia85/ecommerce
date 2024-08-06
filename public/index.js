import { checkLogin } from './login/login.js';

const linkLogin = document.getElementById('link_login');

if (await checkLogin()) {
    linkLogin.href = './logout/logout.html';
    linkLogin.innerText = 'Logout';
} else {
    linkLogin.href = './login/login.html';
    linkLogin.innerText = 'Login';
}