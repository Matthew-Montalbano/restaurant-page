const renderHomePage = () => {
    const content = document.querySelector("#content");
    renderRestaurantHeadline(content);
    renderImage(content);
    renderBiography(content);
}

const renderRestaurantHeadline = (parentNode) => {
    const h1 = document.createElement("h1");
    h1.textContent = "The Veg House";
    parentNode.appendChild(h1);
}

const renderImage = (parentNode) => {
    const imageContainer = document.createElement("center");
    imageContainer.classList.add("image-container");
    const image = document.createElement("img");
    image.src = "https://media-cdn.tripadvisor.com/media/photo-s/0c/e5/65/ca/inside-of-the-restaurant.jpg";
    image.href = "#";
    image.alt = "Restaurant Photo";
    imageContainer.appendChild(image);
    parentNode.appendChild(imageContainer);
}

const renderBiography = (parentNode) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = `This Veg House has been serving customers since it opened in 2018. The owner, Don Chavez, opened it up after reversing his diabetes with a plant-based diet.
    Since then, The Veg House has grown to become one of the most popular spots in Williamsburg. Serving over 500 people a day, The Veg House is the place to get
    delicious plant-based food.`
    parentNode.appendChild(paragraph);
}

export default renderHomePage;