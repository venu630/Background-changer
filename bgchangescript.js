const body = document.querySelector("body");
const leftInput = document.querySelector(".left-input");
const rightInput = document.querySelector(".right-input");
const cssOutput = document.querySelector(".css-output");
const button = document.querySelector(".randButton");

let leftColor = leftInput.value;
let rightColor = rightInput.value;

const changeBackground = () => {
    const cssString = `linear-gradient(to right, ${leftColor}, ${rightColor})`;

    body.style.background = cssString;

    cssOutput.textContent = `background: ${cssString};`;
};

leftInput.addEventListener("change", (event) => {
    leftColor = event.target.value;
    changeBackground();
    
});

rightInput.addEventListener("change", (event) => {
    rightColor = event.target.value;
    changeBackground();

});

const randomColor = () => {
    const values = "0123456789abcdef";

    let color = "#";

    for(let i=1; i<=6; i++){
        const randomIndex = Math.floor(Math.random() * 100) % 16;
        color += values[randomIndex];
    }
    return color;
};

button.addEventListener("click", () => {

    leftColor = randomColor();
    rightColor = randomColor();

    leftInput.value = leftColor;
    rightInput.value = rightColor;
    changeBackground();
});

