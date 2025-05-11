import ramenBowl from "../designModels/RamenBowl.png";
import backgroundModel1 from "../designModels/BackgroundModel1.png";
import backgroundModel2 from "../designModels/BackgroundModel2.png";
import { clearContent } from "../index.js";
import { menu } from "./menu.js";

export const home = function() {
    const content = document.querySelector("#content");

    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero-container");

    const heroTitle = document.createElement("h1");
    heroTitle.classList.add("hero-title");
    heroTitle.textContent = "TASTE THE TRADITION OF JAPAN";

    const orderNowContainer = createOrderContainer("Discover the essence of Japanese cuisine, where every dish is a blend of tradition, craftsmanship, and authentic flavor. At Miyabu House, we bring the timeless spirit of Japan to your table.", "ORDER NOW");

    const heroImg = createImage(ramenBowl, "hero-image", "ramen bowl");

    content.appendChild(heroContainer);
    heroContainer.appendChild(heroTitle);
    heroContainer.appendChild(orderNowContainer);
    heroContainer.appendChild(heroImg);

    function createImage(src, className, alt = "") {
        const img = document.createElement("img");
        img.setAttribute("src", src);
        img.setAttribute("alt", alt);
        img.classList.add(className);
        return img;
    }

    function createOrderContainer(text, buttonText) {
        const container = document.createElement("div");
        container.classList.add("order-container");

        const heroTextContainer = document.createElement("div");
        heroTextContainer.classList.add("hero-text-container");

        const heroImgBg1 = createImage(backgroundModel1, "hero-image-bg1", "japanese food");
        const heroImgBg2 = createImage(backgroundModel2, "hero-image-bg2", "japanese food");

        const paragraph = document.createElement("p");
        paragraph.classList.add("hero-text");
        paragraph.textContent = text;

        const button = document.createElement("button");
        button.classList.add("hero-button")
        button.textContent = buttonText;

        button.addEventListener("click", () => {
            clearContent();
            menu();
        })

        container.appendChild(heroImgBg1);
        container.appendChild(heroTextContainer);
        heroTextContainer.appendChild(paragraph);
        heroTextContainer.appendChild(button);
        container.appendChild(heroImgBg2);

        return container;
    }
}

