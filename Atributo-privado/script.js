class Usuario {
  
    #senha;

    constructor(nome, senha) {
        this.nome = nome;
        this.#senha = senha; 
    }

   
    verificarSenha(senhaDigitada) {
        if (senhaDigitada === this.#senha) {
            return "Acesso permitido";
        } else {
            return "Senha incorreta. Acesso negado.";
        }
    }
}


const usuarioPadrao = new Usuario("Admin", "0001");


function realizarLogin() {
    const senhaDigitada = document.getElementById('inputSenha').value;
    const feedback = document.getElementById('mensagem');


    const resultado = usuarioPadrao.verificarSenha(senhaDigitada);
    
    feedback.innerText = resultado;
    feedback.style.color = resultado === "Acesso permitido" ? "green" : "red";
}