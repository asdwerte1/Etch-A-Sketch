addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("grid");
    const dimension = parseInt(window.getComputedStyle(grid).width);

    function generatePixels(number) {
        
        for (let index = 0; index < number**2; index++) {
            const element = document.createElement("div");
            element.id = `${index + 1}`;
            element.className = "pixel";
            element.style.width = `${dimension / number}px`;
            element.style.height = `${dimension / number}px`;

            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = "#000";
            });
            grid.appendChild(element);
        }
    }

    // Default case
    generatePixels(4);
    
    const resBtn = document.getElementById("res-btn");
    resBtn.addEventListener("click", () => {
        const newRes = Number(prompt("Enter the desired resolution of the sketch area\nYour value should be in pixels and will set the width and height of the pixels"));
        if (newRes > 100) {
            alert("ERROR: Values above 100 are not permitted!");
        } else if (!Number.isInteger(newRes)) {
            alert("ERROR: Please ensure you enter a number!");
        } else {
            // Remove current pixels
            const pixels = document.querySelectorAll(".pixel");
            pixels.forEach(element => {
                element.remove();
            });
            
            generatePixels(newRes);
        }
    })
});
