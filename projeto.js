// const botaocadastro = document.querySelector("#botaocadastro");

// botaocadastro.addEventListener("click", function(e){

// const nome = document.querySelector("#nome");


// const nomevalue = nome.value;

// console.log(nomevalue)




// })


function clicarBotao () {
    let nome = document.getElementById('nome')
    
    let nome2 = document.getElementById('email')

    nome2.setAttribute('value', 'texto estático')
}

let botaocadastro = document.getElementById('botaocadastro')
botaocadastro.addEventListener('click', clicarBotao)