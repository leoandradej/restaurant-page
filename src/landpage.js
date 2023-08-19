import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const createNav = () => {
    const nav = document.createElement("nav");
    nav.className = "nav";

    const homeBtn = document.createElement("button");
    homeBtn.className = "btn";

    const homeBtnName = document.createElement("h3");
    homeBtnName.textContent = "Home";

    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setBtnActive(homeBtn);
        loadHome();
    });

    homeBtn.appendChild(homeBtnName);

    const menuBtn = document.createElement("button");
    menuBtn.className = "btn";

    const menuBtnName = document.createElement("h3");
    menuBtnName.textContent = "Menu";

    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setBtnActive(menuBtn);
        loadMenu();
    });

    menuBtn.appendChild(menuBtnName);

    const contactBtn = document.createElement("button");
    contactBtn.className = "btn";

    const contactBtnName = document.createElement("h3");
    contactBtnName.textContent = "Contact";

    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setBtnActive(contactBtn);
        loadContact();
    });

    contactBtn.appendChild(contactBtnName);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

const createMain = () => {
    const main = document.createElement("main");
    main.className = "main";

    return main;
}

const setBtnActive = (btn) => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn) => {
        if (btn !== this) {
            btn.classList.remove("active");
        }
    });

    btn.classList.add("active");
}

const initializePage = () => {
    const content = document.querySelector("#content");
    content.appendChild(createNav());
    content.appendChild(createMain());
    setBtnActive(document.querySelector(".btn"));
    loadHome();
}

export default initializePage;