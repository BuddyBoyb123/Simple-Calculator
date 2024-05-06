function appendToDisplay(ip) //For display 
    { document.getElementById("display").value += ip;
    return false; }

function clearDisplay() //For clearing display 
  { document.getElementById("display").value = "";
    return false; } 

function backspace() // For backspace
  { var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    return false; } 

function calculate() // To Calculate the output
  { var display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
    return false; }