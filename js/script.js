/* ========================================
   LUME ATELIER
   JavaScript principal
======================================== */

// Seleciona a Navbar pelo ID
const navbar = document.querySelector("#mainNavbar");

// Monitora a rolagem da página
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Adiciona a classe quando a página é rolada
    navbar.classList.add("navbar-scrolled");
  } else {
    // Remove a classe quando retorna ao topo
    navbar.classList.remove("navbar-scrolled");
  }
});

// Fecha o menu responsivo após clicar em um link
const navLinks = document.querySelectorAll("#navbarContent .nav-link");

const navbarCollapse = document.querySelector("#navbarContent");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);

    bsCollapse.hide();
  });
});

// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

// Seleciona o formulário
const contactForm = document.querySelector("#contactForm");

// Monitora o evento de envio
contactForm.addEventListener("submit", (event) => {
  // Impede o envio tradicional do formulário
  event.preventDefault();

  // Seleciona os campos de texto
  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const mensagem = document.querySelector("#mensagem");

  // Remove espaços em branco no início e no final
  nome.value = nome.value.trim();
  email.value = email.value.trim();
  mensagem.value = mensagem.value.trim();

  // Verifica se os campos são válidos
  if (!contactForm.checkValidity()) {
    contactForm.classList.add("was-validated");
    return;
  }

  // Seleciona o elemento de feedback
  const formFeedback = document.querySelector("#formFeedback");

  // Exibe mensagem de sucesso
  formFeedback.textContent =
    "Mensagem enviada com sucesso! Em breve entraremos em contato.";

  // Adiciona a classe de sucesso
  formFeedback.classList.add("success");

  // Limpa os campos do formulário
  contactForm.reset();

  // Remove os estados visuais de validação
  contactForm.classList.remove("was-validated");
});
