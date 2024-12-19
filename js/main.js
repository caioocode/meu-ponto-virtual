
const registerButton = document.getElementById('registerButton');
const logList = documento.getElementById('logList');
const numeroRegistro = document.getElementById('numeroRegistro');
const tipo = document.getElementById('tipo');

let logs = JSON.parse(localStorage.getItem('logs')) || [];

// FUNÇÃO PRA REGISTRAR PONTO
const registerPoint = () => {
    const now = new Date();
    const timestamp = now.toLocaleString();
    const selectedType = tipo.value;
    
    // SALVAR NO ARRAY OS LOGS

    
}

//ADICIONAR EVENTO NO BOTÃO DE REGISTRO