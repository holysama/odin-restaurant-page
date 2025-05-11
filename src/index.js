import "./style.css";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu.js";
import { about } from "./modules/about.js";
import { contact } from "./modules/contact.js";
import { footer } from "./modules/footer.js";

function init() {
    home();
}

init();
footer();

export function clearContent() {
    const content = document.querySelector("#content");
    content.innerHTML = ""
}

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const contactBtn = document.querySelector("#contact");

homeBtn.addEventListener("click", () => {
    clearContent();
    home();
});

menuBtn.addEventListener("click", () => {
    clearContent();
    menu();
});

aboutBtn.addEventListener("click", () => {
    clearContent();
    about();
})

contactBtn.addEventListener("click", () => {
    clearContent();
    contact();
})