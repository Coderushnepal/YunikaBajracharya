let body = document.getElementsByTagName("body")[0];
body.style = `
    background-color: #296ca8;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 100px;
`;

let heading = document.createElement("h1");
body.appendChild(heading);
heading.innerHTML = "My Blog";
heading.style.marginBottom = "0";

let filter = document.createElement("input");
body.appendChild(filter);
filter.setAttribute('type', 'text');
filter.setAttribute('placeholder', 'Filter posts...');
filter.style = `
    padding: 12px;
    font-size: 16px;
    margin-top: 20px;
    width: 80vw;
    max-width: 800px;
`;

let postsContainer = document.createElement("div");
body.appendChild(postsContainer);


let loader = document.createElement("div");
body.appendChild(loader);
loader.style = `
    opacity: 0;
    text-align: center;
    width: 60px;
    margin: 90px auto;
    display: flex;
    position: relative;
    bottom: 50px;
    transition: opacity 0.3s ease-in;
`;

let circle1 = document.createElement("div");
loader.appendChild(circle1);
circle1.classList.add("circle");

let circle2 = document.createElement("div");
loader.appendChild(circle2);
circle2.classList.add("circle");

let circle3 = document.createElement("div");
loader.appendChild(circle3);
circle3.classList.add("circle");

let circle = document.querySelectorAll(".circle");
circle.forEach(element => {
    element.style = `
        background-color: #fff;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 5px;
        animation: bounce 0.5s ease-in infinite;
    `;
})
circle2.style.animationDelay = "0.1s";
circle3.style.animationDelay = "0.2s";