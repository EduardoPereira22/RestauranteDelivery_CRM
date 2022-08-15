
function carregarcep (cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .catch((error) =>{console.log('deu erro' + error)})
    
    .then((resultado) => resultado.json())
    .then((dados) => {
    document.querySelector(`#uf`).value = dados.uf
    document.querySelector(`#endereco`).value = dados.logradouro;
    document.querySelector(`#cidade`).value = dados.localidade;
    document.querySelector(`#bairro`).value = dados.bairro;
    document.querySelector(`#nº_end`).focus();
    
    
    })
    }