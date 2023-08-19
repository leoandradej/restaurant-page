const createHeader = () => {
    const header = document.createElement("header");
    header.className = "menu-header";
    const section = document.createElement("h1"); 
    section.textContent = "Menu";

    header.appendChild(section);

    return header;
}

const createMenu = () => {
    const menu = document.createElement("div");
    menu.className = "menu";

    menu.appendChild(createMenuItem("Margherita", "Tomato sauce, mozarella, tomato, parmesan and basil."));
    menu.appendChild(createMenuItem("Quattro Formaggi", "Tomato sauce, mozarella, provolone, gorgonzola and parmesan."));
    menu.appendChild(createMenuItem("Prosciutto and Mushrooms", "Tomato sauce, mozarella, prosciutto and mushrooms."));
    menu.appendChild(createMenuItem("Pepperoni", "Tomato sauce, mozarella and pepperoni."));
    menu.appendChild(createMenuItem("Zucchini", "Tomato sauce, mozarella, garlic, olive oil and grilled zucchini."));
    menu.appendChild(createMenuItem("Chef's Signature", "Tomato sauce, mozarella, prosciutto, mushrooms, palm heart, bacon and crispy onions."));

    return menu;
}

const createMenuItem = (name, info) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    const pizzaIcon = document.createElement("img");
    pizzaIcon.className = "pizza-icon";
    pizzaIcon.src = "./images/pizza-icon.png";
    pizzaIcon.alt = "pizza icon";

    const pizzaName = document.createElement("h3");
    pizzaName.className = "pizza-name";
    pizzaName.textContent = name;

    const pizzaInfo = document.createElement("p");
    pizzaInfo.className = "pizza-info";
    pizzaInfo.textContent = info;

    menuItem.appendChild(pizzaIcon);
    menuItem.appendChild(pizzaName);
    menuItem.appendChild(pizzaInfo);

    return menuItem;
}

const loadMenu = () => {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createHeader());
    main.appendChild(createMenu());
}

export default loadMenu;