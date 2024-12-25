"use script";
document.addEventListener("DOMContentLoaded", () => {
    // Select element with the id "title"
    const button = document.querySelector("#btn");
    
    // When clicking on the button then select and set a random color to it
    button === null || button === void 0 ? void 0 : button.addEventListener("click", () =>{
        const r = Math.floor(Math.random() * 64);
        const g = Math.floor(Math.random() * 64);
        const b = Math.floor(Math.random() * 64);
        
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});