const renderContacts = () => {
    const content = document.querySelector("#content");
    renderContactsHeader(content);
    renderContactForm(content);
}

const renderContactsHeader = (parentNode) => {
    const h1 = document.createElement("h1");
    h1.textContent = "Contact Us";
    parentNode.appendChild(h1);
}

const renderContactForm = (parentNode) => {
    const form = document.createElement("form");
    addFieldsToForm(form);
    parentNode.appendChild(form);
}

const addFieldsToForm = (form) => {
    let fields = ["Name", "Email", "Phone-Number", "Message"];
    for (let i = 0; i < fields.length; i++) {
        let label = document.createElement("label");
        label.htmlFor = fields[i].toLowerCase();
        label.textContent = fields[i] + ": ";
        let input = document.createElement("input");
        input.id = fields[i].toLowerCase();
        label.appendChild(input);
        form.appendChild(label);
    }
}

export default renderContacts;