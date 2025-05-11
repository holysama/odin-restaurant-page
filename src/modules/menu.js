import sushi from "../designModels/SushiModel.png";
import ramen from "../designModels/BowlModel.png";
import mochi from "../designModels/MochiModel.png";
import onigiri from "../designModels/OnigiriModel.png";

export const menu = function() {
    const content = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuDecorativeText = document.createElement("p");
    menuDecorativeText.classList.add("menu-decorative-text");
    menuDecorativeText.textContent = "最高の食べ物  最高の食べ物  最高の食べ物";
    menuContainer.appendChild(menuDecorativeText);

    const dishes = {
        sushi: {
            image: sushi,
            alt: "sushi image",
            name: "SUSHI",
            variaties: 12 + " variaties",
        },

        ramen: {
            image: ramen,
            alt: "ramen image",
            name: "RAMEN",
            variaties: 8 + " variaties",
        },

        mochi: {
            image: mochi,
            alt: "mochi image",
            name: "MOCHI",
            variaties: 5 + " variaties",
        },

        onigiri: {
            image: onigiri,
            alt: "ornigiri image",
            name: "ONIGIRI",
            variaties: 5 + " variaties",
        },
    }

    const dishesContainer = document.createElement("div");
    dishesContainer.classList.add("dishes-container");
    menuContainer.appendChild(dishesContainer);

    const dishesContainerTitle = document.createElement("h2");
    dishesContainerTitle.classList.add("dishes-container-text")
    dishesContainerTitle.textContent = "OUR SPECIALITIES"
    dishesContainer.appendChild(dishesContainerTitle);

    const dishCardContainer = document.createElement("div");
    dishCardContainer.classList.add("dish-card-container");
    
    for (const dish in dishes) {
        const dishCard = document.createElement("div");
        dishCard.classList.add("dish-card");
        dishCardContainer.appendChild(dishCard);

        const dishImg = document.createElement("img");
        dishImg.classList.add("dish-img")
        dishImg.setAttribute("src", dishes[dish].image);
        dishImg.setAttribute("alt", dishes[dish].alt);
        dishCard.appendChild(dishImg);

        const dishTextContainer = document.createElement("div");
        dishTextContainer.classList.add("dish-text-container");
        dishCard.appendChild(dishTextContainer);

        const dishName = document.createElement("p");
        dishName.classList.add("dish-name");
        dishName.textContent = dishes[dish].name;
        dishTextContainer.appendChild(dishName);

        const dishVarietyCount = document.createElement("p");
        dishVarietyCount.classList.add("dish-variety-count");
        dishVarietyCount.textContent = dishes[dish].variaties;
        dishTextContainer.appendChild(dishVarietyCount);

        const dishOrderBtn = document.createElement("button");
        dishOrderBtn.classList.add("dish-order-btn");
        dishOrderBtn.textContent = "ORDER NOW";
        dishCard.appendChild(dishOrderBtn);

        dishesContainer.appendChild(dishCardContainer);
    }

    content.appendChild(menuContainer);
}