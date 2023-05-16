String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

let colorBox = document.getElementById("colorBox");
let inputField = document.getElementById("inputField");
colorBox.style.backgroundColor = "yellow";

let formattedHEX = "";
let unformattedHEX;

let hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

inputField.oninput = function(){
    
    if(inputField.value.length == 6) {
    console.log("6");
        unformattedHEX = inputField.value;
        unformattedHEX = unformattedHEX.toLowerCase();
        formattedHEX = unformattedHEX;
        for(let i = 0; i < 6; i++){
            if(unformattedHEX.charCodeAt(i) > 102){
                formattedHEX = formattedHEX.replaceAt(i, hexDigits[(unformattedHEX.charCodeAt(i)-97) % 16]);
                console.log("Changed " + unformattedHEX.charAt(i) + " at " + i + " to " + formattedHEX.charAt(i));
            }

        }
        console.log(formattedHEX);
        colorBox.style.backgroundColor = "#" + formattedHEX;
     }
}
