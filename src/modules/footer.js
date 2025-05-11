import twitter from "../designModels/socialIcons/twitter.png"
import facebook from "../designModels/socialIcons/facebook.png"
import instagram from "../designModels/socialIcons/instagram.png"
import github from "../designModels/socialIcons/github.png"

import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import { contact } from "./contact.js";
import { clearContent } from "../index.js";

export const footer = function() {
    const body = document.querySelector("body");
    
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer-container");
    
    restaurantName();
    nav();
    icons();
    
    function restaurantName() {
        const footerRestaurantName = document.createElement("p");
        footerRestaurantName.classList.add("footer-rest-name");
        footerRestaurantName.textContent = "MIYABI HOUSE";
        footerContainer.appendChild(footerRestaurantName);
    }

    function nav() {
        const footerNav = document.createElement("div");
        footerNav.classList.add("footer-nav-container");

        const footerNavLinks = {
            home: ["home"],
            menu: ["menu", "shushi", "tempura", "ramen", "mochi", "specialities"],
            about: ["about", "company", "team", "story"],
            contact: ["contact"]
        }

        for (const property in footerNavLinks) {
            const container = document.createElement("ul");
            container.classList.add("nav-link-container");

            footerNavLinks[property].forEach(link => {

                if (["home", "menu", "about", "contact"].includes(link)) {
                    const button = document.createElement("button");
                    button.textContent = link.toUpperCase();
                    button.classList.add(`${footerNavLinks[property][0]}-link`);

                    if (link === "home") {
                        button.addEventListener("click", () => {
                            clearContent();
                            home();
                        });
                    }

                    else if (link === "menu") {
                        button.addEventListener("click", () => {
                            clearContent();
                            menu();
                        });
                    }

                    else if (link === "about") {
                        button.addEventListener("click", () => {
                            clearContent();
                            about();
                        })
                    }

                    else if (link === "contact") {
                        button.addEventListener("click", () => {
                            clearContent();
                            contact();
                        })
                    }

                    container.appendChild(button);
                }
                
                else {
                    const item = document.createElement("li");
                    item.textContent = link.charAt(0).toUpperCase() + link.slice(1);
                    item.classList.add("nav-link");
                    container.appendChild(item);
                }
                
            });

            footerNav.appendChild(container);
        }
        footerContainer.appendChild(footerNav);
    }

    function icons() {
        const footerSocialLink = document.createElement("div");
        footerSocialLink.classList.add("footer-social-container");

        const iconSection = [twitter, facebook, instagram, github];

        iconSection.forEach(socialLink => {
            const link = document.createElement("a");

            if (socialLink === twitter) {
                link.setAttribute("href", "https://x.com/theodinproject?lang=en");
            }
            
            else if (socialLink === facebook) {
                link.setAttribute("href", "https://www.facebook.com/theodinproject/");
            }
            
            else if (socialLink === instagram) {
                link.setAttribute("href", "https://www.instagram.com/theodinproject/");
            }
            
            else if (socialLink === github) {
                link.setAttribute("href", "https://github.com/holysama");
            }

            const socialIcon = document.createElement("img");
            socialIcon.setAttribute("src", socialLink);
            socialIcon.classList.add("icon");

            link.appendChild(socialIcon);

            footerSocialLink.appendChild(link);
        })

        footerContainer.appendChild(footerSocialLink);
    }

    body.appendChild(footerContainer);
} 


