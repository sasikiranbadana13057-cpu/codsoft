const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.innerText;

        // Clear Screen
        if(value === "AC"){
            screen.value = "";
        }

        // Delete One Character
        else if(value === "DEL"){
            screen.value = screen.value.slice(0, -1);
        }

        // Calculate Result
        else if(value === "="){
            try{
                screen.value = eval(screen.value);
            }
            catch{
                screen.value = "Error";
            }
        }

        // Normal Buttons
        else{
            screen.value += value;
        }

    });
});