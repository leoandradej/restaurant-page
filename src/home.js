const createHeader = () => {
    const header = document.createElement("header");
    header.className = "home-header";
    
    const restaurantName = document.createElement("h1"); 
    restaurantName.textContent = "Basilico";

    header.appendChild(restaurantName);

    return header;
}

const createHome = () => {
    const home = document.createElement("div");
    home.className = "home";

    const info = document.createElement("div");
    info.className = "info";
    info.appendChild(createParagraph("Everything tastes better with some basil on top!"));
    info.appendChild(createParagraph("The best pizza in the city made only with fresh and selected ingredients in the authentic Neapolitan way!"));

    const hours = document.createElement("div");
    hours.className = "hours";

    const title = document.createElement("h3");
    title.textContent = "Hours";

    hours.appendChild(title);
    hours.appendChild(createParagraph("Sunday: 11:30am - 3pm | 5pm - 11:30pm"));
    hours.appendChild(createParagraph("Monday: 5pm - 11:30pm"));
    hours.appendChild(createParagraph("Tuesday: 5pm - 11:30pm"));
    hours.appendChild(createParagraph("Wednesday: 5pm - 11:30pm"));
    hours.appendChild(createParagraph("Thursday: 5pm - 11:30pm"));
    hours.appendChild(createParagraph("Friday: 5pm - 11:30pm"));
    hours.appendChild(createParagraph("Saturday: 11:30am - 3pm | 5pm - 11:30pm"));

    home.appendChild(info);
    home.appendChild(hours);

    return home;
}

const createParagraph = (text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    
    return paragraph;
}

const loadHome = () => {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createHeader());
    main.appendChild(createHome());
}

export default loadHome;