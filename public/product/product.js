import { checkLogin } from "../login/login.js";
import { urlBaseAPI, urlBaseFront } from "../url/base.js";

let dados = [];

function desenhaTabela() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr');
        const btEx = document.createElement('button');
        const btEd = document.createElement('button');

        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');

        btEx.innerText = 'Deletar';
        btEx.setAttribute('data-id', dados[i].id);
        btEx.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            alternaModal();
            enviaDadosParaDelecao(id);
        });

        btEd.innerText = 'Atualizar';
        btEd.setAttribute('data-index', i);
        btEd.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            alternaModal();
            preencheFormParaEdicao(index);
        });

        td1.innerText = dados[i].name;
        td2.innerText = dados[i].price;
        td3.innerText = dados[i].description;
        td4.innerText = dados[i].stock_quantity;
        td5.innerText = dados[i].slug;
        td6.append(btEd, btEx);

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr);
    }
}

function carregaDados() {
    const opcoes = {
        method: 'get',
        credentials: 'include'
    };
    fetch(`${urlBaseAPI}/product`, opcoes)
        .then((res) => {
            //console.log(res);
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            //alert(json);
            dados = json;
            desenhaTabela();
        })
}

function enviaDadosParaCadastro() {
    const dados = new FormData(document.querySelector('form'));
    const opcoes = {
        method: 'post',
        credentials: 'include',
        body: new URLSearchParams(dados)
    };
    fetch(`${urlBaseAPI}/product`, opcoes)
        .then((res) => {
            //console.log(res);
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            alert('Produto ' + json.title + ' cadastrado!');
            carregaDados();
        })
    alternaModal();
}

function enviaDadosParaDelecao(id) {
    const dados = new FormData();
    dados.append('id', id);
    const opcoes = {
        method: 'delete',
        credentials: 'include',
        body: new URLSearchParams(dados)
    };
    fetch(`${urlBaseAPI}/product`, opcoes)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            alert('Produto ' + json.title + ' deletado!');
            carregaDados();
        })
    alternaModal();
}

function preencheFormParaEdicao(index) {
    document.querySelector('#id').value = dados[index].id;
    document.querySelector('#name').value = dados[index].name;
    document.querySelector('#price').value = dados[index].price;
    document.querySelector('#description').value = dados[index].description;
    document.querySelector('#stock_quantity').value = dados[index].stock_quantity;
    document.querySelector('#slug').value = dados[index].slug;
}

function enviaDadosParaEdicao() {
    const dados = new FormData(document.querySelector('form'));
    const opcoes = {
        method: 'put',
        credentials: 'include',
        body: new URLSearchParams(dados)
    };
    fetch(`${urlBaseAPI}/product`, opcoes)
        .then((res) => {
            //console.log(res);
            return res.json();
        })
        .then((json) => {
            //console.log(json);
            alert('Produto ' + json.title + ' alterado!');
            carregaDados();
        })
    alternaModal();
}

function alternaModal() {
    document.querySelector('#modal').classList.toggle('mostrarModal');
}

document.querySelector('form button').addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('#id').value) {
        enviaDadosParaEdicao();
    } else {
        enviaDadosParaCadastro();
    }
    document.querySelector('#id').value = '';
    e.target.parentNode.reset();
});

document.querySelector('#btNovo').addEventListener('click', alternaModal);
window.addEventListener('load', () => {
    checkLogin()
    .then((res)=>{
        if(res){
            carregaDados();
        } else {
            window.location = `${urlBaseFront}/login/login.html`;
        }
    })    
});

