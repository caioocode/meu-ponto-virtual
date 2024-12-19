
const registerButton = document.getElementById('registerButton');
const logList = document.getElementById('logList');
const numeroRegistro = document.getElementById('numeroRegistro');
const tipo = document.getElementById('tipo');
const cleanButton = document.getElementById('limpar')

let logs = JSON.parse(localStorage.getItem('logs')) || [];
//funcão para atualizar logs

const renderLogs = () => {
    logList.innerHTML = ''; // Limpa a lista
    logs.forEach(log => {
    const li = document.createElement('li');
    li.textContent = log;
    logList.appendChild(li);
    });
};

// FUNÇÃO PRA REGISTRAR PONTO
function registerPoint() {
    const now = new Date();  
    const timestamp = now.toLocaleString(); // Obtém a data e hora atual  
    const registerNumber = numeroRegistro.value;  // Obtém o número do registro
    const selectedType = tipo.value; // Obtém o tipo selecionado

    const logEntry = `${selectedType}: ${registerNumber}: ${timestamp}`;

    logs.push(logEntry);

    const logsJSON = JSON.stringify(logs);
    localStorage.setItem('logs', logsJSON);

    // Atualiza a lista na tela
    renderLogs();

}

//função limpa registro da tela
function limpaRegistro () {
    logList.innerHTML = '';
};


//ADICIONAR EVENTO NO BOTÃO DE REGISTRO
registerButton.addEventListener('click', registerPoint);

//adicionar evento limpar registro da tela
cleanButton.addEventListener('click', limpaRegistro)

renderLogs();