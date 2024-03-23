  const nav = document.querySelector(".mobileNavBar");
  const btnNav = document.getElementById("btnMobileNav");

  document.addEventListener("DOMContentLoaded", function () {
    // Adiciona a classe para ocultar a segunda nav móvel
    document.querySelector(".mobileNavBar").classList.add("hidden");
    // Adiciona um evento de clique ao botão que mostra a nav
    document.getElementById("btnMobileNav").addEventListener("click", function () {
      // Remove a classe para mostrar a segunda nav móvel
      document.querySelector(".mobileNavBar").classList.remove("hidden");
  
      btnNav.addEventListener("click", () => {
          nav.classList.toggle("open");
        });
    });
  });

