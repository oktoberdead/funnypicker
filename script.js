let colorBox = document.getElementById("colorBox");
let inputField = document.getElementById("inputField");
colorBox.style.backgroundColor = "red";

let formattedHEX;
let unformattedHEX;

inputField.oninput = function(){
    
    
    if(inputField.value.length == 6) {
    console.log("6");
        unformattedHEX = inputField.innerHTML;
        for(let i = 0; i < 6; i++){
            formattedHEX.charAt(i) = unformattedHEX.charAt(i) % 26;
            console.log("Changed " + unformattedHEX.charAt(i) + " to " + formattedHEX.charAt(i));
        }
        colorBox.style.backgroundColor = "#" + formattedHEX;
        alert(1)
     }
}
