addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    for (let index = 0; index < 16; index++) {
        const element = document.createElement("div");
        element.id = `${index + 1}`;
        element.className = "pixel";
        element.addEventListener("mouseenter", () => {
            element.style.backgroundColor = "#000";
        });
        grid.appendChild(element);
    }

    const resBtn = document.getElementById("res-btn");
    resBtn.addEventListener("click", () => {
        prompt("Enter the desired resolution of the sketch area\nYour value should be in pixels and will set the width and height of the pixels");
    })
});