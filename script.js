let inputele = document.getElementById("inputbox");
let btnele = document.querySelectorAll("button");

for (let i = 0; i < btnele.length; i++) {
    btnele[i].addEventListener("click", () => {

        const btnvalue = btnele[i].textContent;

        if (btnvalue === "AC") {
            inputele.value = "";
        }
        else if (btnvalue === "=") {
            inputele.value = eval(inputele.value);
        }
        else if (btnvalue === "DEL") 
            inputele.value = inputele.value.slice(0, -1);
        else {
            inputele.value += btnvalue;
        }

    });
}