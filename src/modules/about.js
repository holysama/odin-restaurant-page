import sushiMan from "../designModels/SushiManModel.png"
import sushi from "../designModels/svgs/sushi.svg";
import lotus from "../designModels/svgs/lotus.svg";
import bonsai from "../designModels/svgs/bonsai.svg";

export const about = function() {
    const content = document.querySelector("#content");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    

    aboutSection();
    story();
    coreValues();

    function aboutSection() {
        const aboutSection = document.createElement("div");
        aboutSection.classList.add("about-section");
        aboutContainer.appendChild(aboutSection);

        const aboutTextSection = document.createElement("div");
        aboutTextSection.classList.add("about-text-section");
        aboutSection.appendChild(aboutTextSection);

        const aboutTitle = document.createElement("h1");
        aboutTitle.classList.add("about-title");
        aboutTitle.textContent = "ABOUT MIYABI HOUSE";
        aboutTextSection.appendChild(aboutTitle);

        const aboutSubHeading = document.createElement("h2");
        aboutSubHeading.classList.add("about-subheading");
        aboutSubHeading.textContent = "Where every bowl tells a story of warmth, craft, and tradition.";
        aboutTextSection.appendChild(aboutSubHeading);

        const aboutParagraph = document.createElement("p");
        aboutParagraph.classList.add("about-paragraph");
        aboutParagraph.textContent = `
        At Miyabi House, we celebrate the timeless craft of Japanese cuisine—rooted in tradition, prepared with care, and served from the heart.
        
        Every dish we create is inspired by generations of home-style cooking, where simplicity, balance, and freshness are at the center of every meal. We believe great food doesn’t need to be complicated—it just needs to be made with intention. From a comforting bowl of miso to delicately hand-rolled maki, our ingredients are fresh, our techniques are time-honored, and our flavors speak for themselves.
        
        Miyabi House isn’t just a restaurant—it’s a reflection of Japanese hospitality. A place where guests are welcomed like family, and where each visit offers warmth, connection, and a quiet sense of beauty. Whether you’re here for a quick bite or a slow, thoughtful meal, we invite you to relax, savor, and experience the soul of Japan with us.
        `;
        aboutTextSection.appendChild(aboutParagraph);

        const aboutBtn = document.createElement("button");
        aboutBtn.classList.add("about-btn");
        aboutBtn.textContent = "MEET THE TEAM";
        aboutTextSection.appendChild(aboutBtn);

        const sushiManImg = createImage(sushiMan, "sushiman-image", "sushi man");
        aboutSection.appendChild(sushiManImg);
    }
    
    function story() {
        const storySection = document.createElement("div");
        storySection.classList.add("story-section");
        aboutContainer.appendChild(storySection);

        const storyTitle = document.createElement("h2");
        storyTitle.classList.add("story-title");
        storyTitle.textContent = "OUR JOURNEY FROM TOKYO TO YOUR TABLE";
        storySection.appendChild(storyTitle);

        const storyParagraphContainer = document.createElement("div");
        storyParagraphContainer.classList.add("story-paragraph-container");
        storySection.appendChild(storyParagraphContainer);

        const storyPrahraph1 = document.createElement("p");
        storyPrahraph1.classList.add("story-parahraph-one");
        storyPrahraph1.textContent = "Miyabi House began its journey in 2023 as a humble pop-up ramen stand, drawing inspiration from the vibrant street food of Osaka and the quiet elegance of Kyoto. What started as a passion project quickly blossomed into a beloved gathering place where flavor, craft, and culture meet. Today, we carry that same spirit into every dish we serve—blending tradition with community, and bringing a taste of Japan’s culinary soul to your table.";
        storyParagraphContainer.appendChild(storyPrahraph1);

        const storyPrahraph2 = document.createElement("p");
        storyPrahraph2.classList.add("story-parahraph-two");
        storyPrahraph2.textContent = "As we've grown, so has our commitment—to quality, to authenticity, and to the people we serve. Every bowl we craft is more than just a meal; it's a connection to the places, people, and stories that inspire us. From our carefully sourced ingredients to the welcoming atmosphere of our space, Miyabi House is built on the belief that food should bring comfort, joy, and a sense of belonging—no matter where you are in the world.";
        storyParagraphContainer.appendChild(storyPrahraph2);
    }

    function coreValues() {
        const coreValuesSection = document.createElement("div");
        coreValuesSection.classList.add("core-values-section");
        aboutContainer.appendChild(coreValuesSection);

        const coreValuesTitle = document.createElement("h2");
        coreValuesTitle.classList.add("core-values-title");
        coreValuesTitle.textContent = "CORE VALUES";
        coreValuesSection.appendChild(coreValuesTitle);

        const coreValuesCardContainer = document.createElement("div");
        coreValuesCardContainer.classList.add("core-value-card-container");
        coreValuesSection.appendChild(coreValuesCardContainer);

        const coreValues = {
            craftmanship: {
                image: sushi,
                name: "craftmanship",
                text: "At Miyabi House, every ingredient is treated with intention. Our chefs follow time-honored methods, valuing patience and precision over shortcuts. It’s about doing things the right way, with respect for the culinary traditions that shaped us."
            },

            community: {
                image: lotus,
                name: "community",
                text: "We believe food brings people together. Whether you're dining solo or with loved ones, Miyabi House is a space where stories are shared, memories are made, and everyone is welcome at the table."
            },

            sustainability: {
                image: bonsai,
                name: "sustainability",
                text: "We partner with local suppliers and choose seasonal ingredients to create meals that are both delicious and responsible. By supporting sustainable practices, we nourish not just our guests—but our community and environment, too."
            }
        }

        for (const value in coreValues) {
            const coreValueCard = document.createElement("div");
            coreValueCard.classList.add("core-value-card");
            coreValuesCardContainer.appendChild(coreValueCard);

            const svgImg = createImage(coreValues[value].image, `${coreValues[value].name}-svg`, `${coreValues[value].name} image`);
            coreValueCard.appendChild(svgImg);

            const cardNameTitle = document.createElement("h3");
            cardNameTitle.classList.add(`value-card-name-title`);
            cardNameTitle.textContent = `${coreValues[value].name.toUpperCase()}`;
            coreValueCard.appendChild(cardNameTitle);

            const cardParagraph = document.createElement("p");
            cardParagraph.classList.add("value-card-paragraph");
            cardParagraph.textContent = coreValues[value].text;
            coreValueCard.appendChild(cardParagraph);
            
        }

    }
    
    function createImage(src, className, alt = "") {
        const img = document.createElement("img");
        img.setAttribute("src", src);
        img.setAttribute("alt", alt);
        img.classList.add(className);
        return img;
    }

    content.appendChild(aboutContainer);
}
