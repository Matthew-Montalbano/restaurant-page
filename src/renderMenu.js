const renderMenu = () => {
    const content = document.querySelector("#content");
    renderMenuHeading(content);
    renderMenuList(content);
}

const renderMenuHeading = (parentNode) => {
    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    parentNode.appendChild(heading);
}

const renderMenuList = (parentNode) => {
    const list = document.createElement("ul");
    addItemsToList(list);
    parentNode.appendChild(list);
}

const addItemsToList = (list) => {
    let items = ["Tofu Scramble - $8.99", "'Chikn' & Waffles - $10.29", "Breakfast Burrito - $9.50", "Mango Fried Rice - $12.50", "Spaghetti and Meatballs - $12.99"];
    for (let i = 0; i < items.length; i++) {
        let item = document.createElement("li");
        item.textContent = items[i];
        list.appendChild(item);
    }
}

export default renderMenu;