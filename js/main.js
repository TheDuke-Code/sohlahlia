// Hämtar menyknappen och menyn från index.html
const menyknapp = document.querySelector(".menyknapp");
const meny = document.querySelector("nav");

// När man klickar på knappen visas eller döljs menyn
menyknapp.addEventListener("click", function () {
    meny.classList.toggle("open");
});