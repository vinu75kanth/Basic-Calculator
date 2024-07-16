const display = document.getElementById("display");

function appendToDisplay(char){
    display.value += char;
}

function clearDisplay(){
    display.value ="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="error";
    }
}