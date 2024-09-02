addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    for (let index = 0; index < 16; index++) {
        const element = document.createElement("div");
        element.id = `${index + 1}`;
        element.className = "pixel";
        grid.appendChild(element);
    }
});