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
            switchActiveTabClass(tab);
            clearContent();
            renderFunctions[i]();
        });
    }
}

const switchActiveTabClass = (newTab) => {
    const activeTab = document.querySelector(".active-tab");
    activeTab.classList.remove("active-tab");
    newTab.classList.add("active-tab");
}

const clearContent = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

attachNavigationListeners();
renderHomePage();