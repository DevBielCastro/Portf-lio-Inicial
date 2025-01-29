// Adiciona números e operadores ao visor
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Limpa o visor da calculadora
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Executa o cálculo
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        alert("Expressão inválida!");
    }
}
