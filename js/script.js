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

  // Seleciona o elemento de feedback
  const formFeedback = document.querySelector("#formFeedback");

  // Limpa mensagens anteriores
  formFeedback.textContent = "";
  formFeedback.classList.remove("success");

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

// ========================================
// MODAL DE SERVIÇOS
// ========================================

// Conteúdo de cada serviço
const serviceContent = {
  retratos: {
    title: "Retratos e ensaios",
    description:
      "Mais do que registrar uma imagem, buscamos revelar a personalidade e a essência de cada pessoa. Nossos ensaios são conduzidos com sensibilidade e direção fotográfica, respeitando a identidade e a expressão individual.",
  },

  eventos: {
    title: "Eventos e celebrações",
    description:
      "Cada celebração reúne momentos únicos e emoções irrepetíveis. Nossa fotografia acompanha os acontecimentos com discrição e sensibilidade, preservando os detalhes e as histórias que tornam cada evento especial.",
  },

  corporativo: {
    title: "Fotografia corporativa e comercial",
    description:
      "A imagem também comunica valores, profissionalismo e identidade. Produzimos fotografias para empresas, profissionais e marcas que desejam fortalecer sua presença e transmitir sua essência visual.",
  },
};

// Seleciona o modal
const serviceModal = document.querySelector("#serviceModal");

// Monitora a abertura do modal
serviceModal.addEventListener("show.bs.modal", (event) => {
  // Identifica o botão que acionou o modal
  const button = event.relatedTarget;

  // Obtém o serviço selecionado
  const service = button.dataset.service;

  // Recupera o conteúdo correspondente
  const content = serviceContent[service];

  // Atualiza o título e a descrição
  document.querySelector("#serviceModalLabel").textContent = content.title;

  document.querySelector("#serviceModalBody").textContent = content.description;
});

// ========================================
// NAVEGAÇÃO DO MODAL PARA CONTATO
// ========================================

// Seleciona o botão de contato do modal
const contactFromModal = document.querySelector("#contactFromModal");

// Monitora o clique no botão
contactFromModal.addEventListener("click", () => {
  // Obtém a instância do modal
  const modalInstance = bootstrap.Modal.getInstance(serviceModal);

  // Monitora o término do fechamento
  serviceModal.addEventListener(
    "hidden.bs.modal",
    () => {
      // Navega até a seção de contato
      document.querySelector("#contato").scrollIntoView();
    },
    { once: true },
  );

  // Fecha o modal
  modalInstance.hide();
});
