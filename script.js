let colorBox = document.getElementById("colorBox");
let inputField = document.getElementById("inputField");
colorBox.style.backgroundColor = "red";

let formattedHEX;
let unformattedHEX;

inputField.oninput = function(){
    
    
    if(this.value.length == 6) {
    console.log("More than 6");
        unformattedHEX = this.value;
        for(let i = 0; i < 6; i++){
            formattedHEX.charAt(i) = unformattedHEX.charAt(i) % 26;
            console.log("Changed " + unformattedHEX.charAt(i) + " to " + formattedHEX.charAt(i));
        }
        colorBox.style.backgroundColor = "#" + formattedHEX;
        alert(1)
     }
}
