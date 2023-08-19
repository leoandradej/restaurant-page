const createHeader = () => {
    const header = document.createElement("header");
    header.className = "contact-header";

    const section = document.createElement("h1");
    section.textContent = "Contact Us";
    
    header.appendChild(section);

    return header;
}

const createContact = () => {
    const contact = document.createElement("div");
    contact.className = "contact";

    contact.appendChild(createContactItem("Phone", "202-555-0123"));
    contact.appendChild(createContactItem("Address", "Pompeo Street 1296, Queens, US"));
    contact.appendChild(createContactItem("Email", "basilico@pizza.com"));

    return contact;
}

const createContactItem = (name, info) => {
    const contactItem = document.createElement("div");
    contactItem.className = "contact-item";

    const itemIcon = document.createElement("img");
    itemIcon.className = "item-icon";
    itemIcon.src = `./images/${name.toLowerCase()}.png`;
    itemIcon.alt = `${name}`;

    const itemName = document.createElement("h3");
    itemName.className = "item-name";
    itemName.textContent = name;

    const itemInfo = document.createElement("p");
    itemInfo.className = "item-info";
    itemInfo.textContent = info;

    contactItem.appendChild(itemIcon);
    contactItem.appendChild(itemName);
    contactItem.appendChild(itemInfo);

    return contactItem;
}

const loadContact = () => {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createHeader());
    main.appendChild(createContact());
}

export default loadContact;