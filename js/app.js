// Tu código aquí
const HEXCOLORLENGTH = 6;
//Function to get random HEX-color
function randomHex(){
    optionsHex = "0123456789ABCDEF";
    rndHex = "#";
    for(i=0; i<HEXCOLORLENGTH; i++){
        rndNum = Math.floor(Math.random()*(optionsHex.length-1));
        rndHex += optionsHex[rndNum];
    }
    return rndHex;

}
//function change background color when clicking
function changeBackgroundColor(){
    body = document.querySelector("body");
    body.style.backgroundColor = randomHex();
}

btn = document.querySelector("#btn");
btn.onclick = changeBackgroundColor;