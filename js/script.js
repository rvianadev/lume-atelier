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
