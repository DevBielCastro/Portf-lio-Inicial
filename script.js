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
  
    projectList.appendChild(projectCard);
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