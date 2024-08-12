import { urlBaseAPI, urlBaseFront } from "../url/base.js"

function realizaRegistro() {
    const data = new FormData(document.forms[0])

    const opcoes = {
        method: 'post',
        credentials: 'include',
        body: new URLSearchParams(data)
    };

    fetch(`${urlBaseAPI}/user`, opcoes)
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            if (json.registered) {
                window.location = `${urlBaseFront}/index.html`
            } else {
                alert(json.message)
            }
        })
}

async function checkSeExisteRegistro() {
    const opcoes = {
        method: 'get',
        credentials: 'include'
    }

    const res = await fetch(`${urlBaseAPI}/user/existuser`, opcoes)
    const json = await res.json()

    if (json.existuser) {
        return true
    } else {
        return false
    }
}

export { realizaRegistro, checkSeExisteRegistro };
