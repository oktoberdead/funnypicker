let colorBox = document.getElementById("colorBox");
let inputField = document.getElementById("inputField");
colorBox.style.backgroundColor = "red";

let formattedHEX;
let unformattedHEX;

inputField.oninput = function(){
    
    
    if(this.value.length == 6) {
        unformattedHEX = this.value;
        for(let i = 0; i < 6; i++){
            formattedHEX[i] = unformattedHEX[i] % 26;
        }
        colorBox.style.backgroundColor = "#" + formattedHEX;
        alert(1)
     }
}
