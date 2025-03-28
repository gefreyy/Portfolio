// Seleccionar los elementos del DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo');

const scrollTopBtn = document.getElementById("scrollTopBtn");
const imgArrowUp = document.querySelector(".img-arrow-up");
const gitInvert = document.querySelector(".github");

const projectsSection = document.getElementById("projects-link");
const techAndToolsSection = document.getElementById("techs-and-tools-link");
const aboutMeSection = document.getElementById("about-me-link");

const projects = document.getElementById("projects-section");
const techAndTools = document.getElementById("technologies-and-tools");
const aboutMe = document.getElementById("about-me-section");

// Mostrar el botón cuando el usuario haga scroll hacia abajo
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) { // Se muestra cuando el usuario baja 300px
        scrollTopBtn.classList.add("show");
        scrollTopBtn.style.animation = "boo .5s ease forwards";
    } else {
        scrollTopBtn.classList.remove("show");
        scrollTopBtn.style.animation = "byee .5s ease forwards";
    }
});

// Al hacer clic en el botón, vuelve arriba con un efecto suave
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

projectsSection.addEventListener("click", () => {
    window.scrollTo({ top: projects.offsetTop + 28, behavior: "smooth" });
});

techAndToolsSection.addEventListener("click", () => {
    window.scrollTo({ top: techAndTools.offsetTop, behavior: "smooth" });
});

aboutMeSection.addEventListener("click", () => {
    window.scrollTo({ top: aboutMe.offsetTop, behavior: "smooth" });
});

// Evento para el menú hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Activa/Desactiva la animación de las barras
    navMenu.classList.toggle('active');  // Muestra/Oculta el menú
});

// Cierra el menú al hacer clic en cualquier enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active'); // Reinicia el estado del botón
        navMenu.classList.remove('active');  // Oculta el menú
    });
});

function applyDarkThemeFilters() {
  logo.style.filter = "invert(1)";
  imgArrowUp.style.filter = "invert(0)";
  gitInvert.classList.add("invert");
}

function applyLightThemeFilters() {
  logo.style.filter = "invert(0)";
  imgArrowUp.style.filter = "invert(1)";
  gitInvert.classList.remove("invert");
}


// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);
  
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    applyDarkThemeFilters();
    localStorage.setItem("theme", "dark"); //add this for save the theme if refresh or close
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    applyLightThemeFilters();
    localStorage.setItem("theme", "light"); //add this for save the theme if refresh or close
  }
}

toggleSwitch.addEventListener('change', switchTheme);
  
// Save user preference on load
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;
  
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  
  // Aplicar los filtros dependiendo del tema actual
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    applyDarkThemeFilters();
  } else {
    applyLightThemeFilters();
  }
}
  
  //Adding date
  
let myDate = document.querySelector("#datee");
  
const yes = new Date().getFullYear();
myDate.innerHTML = yes;