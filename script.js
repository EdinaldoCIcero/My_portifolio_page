// MENU MOBILE
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");




hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// CONTATOS + QR CODE
const contacts = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/edinaldo-cicero-581400250/" },
    { name: "Git Hub", link: "https://github.com/EdinaldoCIcero" },
    
    { name: "Email Principal", link: "mailto:egsecs76@gmail.com" },
    { name: "Email Secundário", link: "mailto:edinaldociceroatomo@gmail.com" },
    { name: "Instagram", link: "https://www.instagram.com/edatomico/" },
    { name: "Itch.io", link: "https://atomogame-studio.itch.io/" },
    { name: "GameJolt", link: "https://gamejolt.com/@atomosgames" },
    { name: "Blog", link: "https://atomo-digital-studio.blogspot.com/" }


    
];

const contactGrid = document.getElementById("contactGrid");

contacts.forEach(contact => {
    const card = document.createElement("div");
    card.classList.add("contact-card");

    card.innerHTML = `
        <h3>${contact.name}</h3>
        <div class="contact-content">
            <span class="contact-link">${contact.link}</span>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(contact.link)}">
        </div>
    `;

    // Tornar o card clicável
    card.addEventListener("click", () => {
        window.open(contact.link, "_blank");
    });

    contactGrid.appendChild(card);
});


// ===== MODAL PROJETOS SIMPLES =====

const modal     = document.getElementById("imageModal");
const modalImg  = document.getElementById("modalImg");
const closeBtn  = document.querySelector(".close");

// Seleciona TODOS os cards de projeto
const projectCards = document.querySelectorAll(".projects .card");

projectCards.forEach(card => {

    const img = card.querySelector("img");

    card.addEventListener("click", function (e) {

        // Se clicar no botão "Visitar", não abre modal
        if (e.target.tagName === "A") return;

        modal.style.display = "flex";
        modalImg.src = img.src;
    });

});

// Fechar no X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar clicando fora
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});



