import background from "../designModels/contactBackground.png";
import sushiMan from "../designModels/SushiManContact.png";

export const contact = function() {
    const content = document.querySelector("#content");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    backgroundImages()
    contactUsContainer();

    function backgroundImages() {
        for (let i = 0; i < 3; i++) {
            const backgroundImage = createImage(background, "sushi-background", "sushi background");
            contactContainer.appendChild(backgroundImage);
        }
    }

    function contactUsContainer() {
        const contactSection = document.createElement("div");
        contactSection.classList.add("contact-section");
        contactContainer.appendChild(contactSection);

        const contactUsTitle = createTitle("h1", "contact-us-title", "CONTACT US");
        contactSection.appendChild(contactUsTitle);

        const divContactContainer = document.createElement("div");
        divContactContainer.classList.add("div-content-container");
        contactSection.appendChild(divContactContainer);

        const cardsContainer = document.createElement("div");
        cardsContainer.classList.add("contact-cards-container");
        divContactContainer.appendChild(cardsContainer);

        const sushiCheffImg = createImage(sushiMan, "sushi-man-contact", "sushi cheff")
        divContactContainer.appendChild(sushiCheffImg);

        const contactCards = {
            reservations: {
                subheading: "Reservations",
                text: 
                `Experience the art of Japanese dining.
                Call us at (555) 987-2468 to reserve your table at Miyabi House.

                Private rooms and tatami seating available upon request.`
            },

            diningHours: {
                subheading: "Dining Hours",
                text:
                `Monday - Thursday: 12:00 PM - 9:30 PM
                Friday - Saturday: 12:00 PM - 11:00 PM
                Sunday: 12:00 PM - 8:00 PM

                Enjoy a quiet lunch or an evening of omakase-style dinner service.`
            },

            location: {
                subheading: "Location",
                text:
                `45 Sakura Street
                Hanami District, Kyoto Springs, CA 90210

                Free parking available behind the restaurant.
                Steps away from the Kyoto Garden Plaza.`
            }
        }

        for (const property in contactCards) {
            const card = document.createElement("div");
            card.classList.add("contact-card");

            const subheading = createTitle("h2", "contact-card-title", `${contactCards[property].subheading}`);
            card.appendChild(subheading);

            const paragraph = createParagraph(`${contactCards[property].text}`);
            card.appendChild(paragraph)

            cardsContainer.appendChild(card);
        }
    }

    //tested new helper functions
    function createTitle(type, cssClass, text) {
        const title = document.createElement(`${type}`);
        title.classList.add(`${cssClass}`);
        title.textContent = text;
        return title;
    }

    function createParagraph(text) {
        const paragraph = document.createElement("p");
        paragraph.classList.add("contact-card-paragraph");
        paragraph.innerHTML = text.replace(/\n/g, "<br>");

        return paragraph;
    }
    
    function createImage(src, className, alt = "") {
        const img = document.createElement("img");
        img.setAttribute("src", src);
        img.setAttribute("alt", alt);
        img.classList.add(className);
        return img;
    }
    
    content.appendChild(contactContainer)
}