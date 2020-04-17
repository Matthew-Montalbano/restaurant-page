import renderHomePage from "./renderHomePage.js";
import renderMenu from "./renderMenu.js";
import renderContacts from "./renderContacts.js";

const attachNavigationListeners = () => {
    let renderFunctions = [renderHomePage, renderMenu, renderContacts];
    let tabs = document.querySelector("nav").children;
    for (let i = 0; i < 3; i++) {
        let tab = tabs[i];
        console.log(tab);
        tab.addEventListener("click", () => {
            clearContent();
            renderFunctions[i]();
        });
    }
}

const clearContent = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

attachNavigationListeners();
renderHomePage();