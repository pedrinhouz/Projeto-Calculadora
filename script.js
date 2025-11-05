const display = document.querySelector(".display span");

const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttonText = button.textContent;
        if (buttonText === "C") {
            currentInput = "";
        }

        else if (buttonText ==="=") {
            try { 
                currentInput = eval(currentInput);
            } catch {
                currentInput = "Erro";
            }
        }
        
        else {
            currentInput += buttonText;
        }

        display.textContent = currentInput || "0";

    });
});