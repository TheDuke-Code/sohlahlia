// Hämtar menyknappen och menyn från index.html
const menyknapp = document.querySelector(".menyknapp");
const meny = document.querySelector("nav");

// När man klickar på knappen visas eller döljs menyn
menyknapp.addEventListener("click", function () {
    meny.classList.toggle("open");
});

// Hämtar kontaktformuläret
const formular = document.getElementById("kontaktformular");

// Koden körs bara om formuläret finns på sidan
if (formular) {
    formular.addEventListener("submit", function (event) {
        // Stoppar formuläret från att skickas och ladda om sidan
        event.preventDefault();

        // Hämtar infon från namnfältet
        const namn = document.getElementById("namn").value.trim();

        // Kollar om namnfältet är tomt
        if (namn === "") {
            document.getElementById("namnfel").textContent = "Du måste fylla i ditt namn.";
        } else {
            document.getElementById("namnfel").textContent = "";
        }

        // Hämtar info från e-postfältet
        const epost = document.getElementById("epost").value.trim();

        // Kollar om e-postfältet är tomt eller saknar @
        if (epost === "") {
            document.getElementById("epostfel").textContent = "Du måste fylla i din e-post.";
        } else if (epost.includes("@") === false) {
            document.getElementById("epostfel").textContent = "E-postadressen måste innehålla @.";
        } else {
            document.getElementById("epostfel").textContent = "";
        }

        // Hämtar info från meddelandefältet
        const meddelande = document.getElementById("meddelande").value.trim();

        // Kollar om meddelandefältet är tomt
        if (meddelande === "") {
            document.getElementById("meddelandefel").textContent = "Du måste skriva ett meddelande.";
        } else {
            document.getElementById("meddelandefel").textContent = "";
        }

        // Om alla fält är ifyllda så visas ett tack
        if (namn !== "" && epost.includes("@") && meddelande !== "") {
            document.getElementById("tack").textContent = "Tack för ditt meddelande! Vi svarar så snart vi kan.";
            formular.reset();
        } else {
            document.getElementById("tack").textContent = "";
        }
    });
}

