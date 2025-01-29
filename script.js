// script.js

// Otimização: Carregar projetos dinamicamente
const projects = [
  { title: "Calculadora JavaScript", description: "Uma calculadora simples para operações básicas.", link: "#" },
  { title: "To-Do List", description: "Gerencie suas tarefas de forma eficiente.", link: "#" },
  { title: "Portfolio Responsivo", description: "Este site é um exemplo de portfólio.", link: "#" }
];

const projectList = document.getElementById("project-list");

// Renderizar projetos dinamicamente
projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">Ver Projeto</a>
  `;

  // Adiciona um evento para abrir o modal da calculadora
  if (project.title === "Calculadora JavaScript") {
      const openButton = projectCard.querySelector("a");
      openButton.addEventListener("click", (e) => {
          e.preventDefault(); // Impede o link de abrir outra página
          openCalculatorModal(); // Abre o modal com a calculadora
      });
  }

  projectList.appendChild(projectCard);
});

// Modal da Calculadora
const modal = document.getElementById("calculatorModal");
const closeButton = document.querySelector(".close");
const calculatorContainer = document.getElementById("calculatorContainer");

// Função para abrir o modal e carregar a calculadora
function openCalculatorModal() {
  modal.style.display = 'block';
  
  // Adiciona a estrutura da calculadora no modal
  calculatorContainer.innerHTML = `
      <div id="display"></div>
      <button class="btn" data-value="7">7</button>
      <button class="btn" data-value="8">8</button>
      <button class="btn" data-value="9">9</button>
      <button class="btn" data-value="/">/</button>
      <button class="btn" data-value="4">4</button>
      <button class="btn" data-value="5">5</button>
      <button class="btn" data-value="6">6</button>
      <button class="btn" data-value="*">*</button>
      <button class="btn" data-value="1">1</button>
      <button class="btn" data-value="2">2</button>
      <button class="btn" data-value="3">3</button>
      <button class="btn" data-value="-">-</button>
      <button class="btn" data-value="0">0</button>
      <button class="btn" data-value=".">.</button>
      <button class="btn" data-value="=">=</button>
      <button class="btn" data-value="+">+</button>
      <button class="btn" data-value="C">C</button>
  `;

  // Lógica da calculadora
  const display = document.getElementById("display");
  let currentInput = "";

  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
      button.addEventListener("click", () => {
          const value = button.getAttribute("data-value");

          if (value === "C") {
              currentInput = "";
              display.textContent = "";
          } else if (value === "=") {
              try {
                  currentInput = eval(currentInput).toString();
                  display.textContent = currentInput;
              } catch (e) {
                  display.textContent = "Erro!";
                  currentInput = "";
              }
          } else {
              currentInput += value;
              display.textContent = currentInput;
          }
      });
  });
}

// Fechar o modal quando clicar no X
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar o modal quando clicar fora dele
window.addEventListener('click', (event) => {
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});

// Interatividade no formulário de contato
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Capturar dados do formulário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log(`Mensagem enviada por ${name} (${email}): ${message}`);

  alert("Sua mensagem foi enviada com sucesso!");
  contactForm.reset(); // Limpar o formulário
});
