const resultScreen = document.getElementById("resultScreen")
resultScreen.value = "";
let result = resultScreen.value ;

const buttons = document.querySelectorAll("#calcBtn")


let output = ""; 

buttons.forEach((button) => {
    button.addEventListener("click",({target:{value}}) => {
        if(value === "=" && resultScreen.value.length === 0){
            resultScreen.value = "";
        }
        else if(value === "="){
            output = String(eval(output))
            resultScreen.value = output;
        }
        else if(value == "AC"){
            output = ""
            resultScreen.value = output;
        }
        else{
            output += value
            resultScreen.value = output;
        }
    })
})