const hexaBtn = document.querySelector(".hexa-btn");
const hevaVal = document.querySelector(".hexa-value");
const hexaContainer = document.querySelector(".hexa-container");

const rgbCopy = document.querySelector(".rgb-copy");
const hexaCopy = document.querySelector(".hexa-copy");


// create a random hexa color

hexaBtn.addEventListener("click",  ()=>{
    let charSet = "0123456789ABCDEF";
    let hexOutput = "";
    
    for (let i = 0,  charSetLength = charSet.length; i < 6 ; ++i) {
        // return a random value in charset having  = to charset length  
        hexOutput  += charSet.charAt( Math.floor(Math.random()*charSetLength));  


        
    }

     hevaVal.textContent = `#${hexOutput}`;
    hexaContainer.style.backgroundColor= `#${hexOutput}`;
    hexaBtn.style.color = `#${hexOutput}`;

    // console.log(hexOutput);


})

// hexa copy
function hexaToClipboard() {
    navigator.clipboard.writeText( hevaVal.textContent);  // use to copy html text in js
    alert(" Hexa color is copied ");
    
}
hexaCopy.addEventListener("click",hexaToClipboard);






// create rgb color 

const rgbContainer = document.querySelector(".rgb-container");
const getRedRange = document.getElementById("red");
const getBlueRange = document.getElementById("blue");
const getGreenRange = document.getElementById("green");
const rgbBtn = document.querySelector(".rgb-btn");

const rgbVal = document.querySelector(".rgb-value");



rgbBtn.addEventListener("click", ()=>{
    let extractRed = getRedRange.value;
    let extractGreen = getGreenRange.value;
    let extractBlue = getBlueRange.value;

    // console.log(extractBlue,extractRed,extractGreen);
    rgbContainer.style.backgroundColor = `rgb(${extractRed},${extractGreen},${extractBlue})`;

    rgbVal.textContent = `rgb(${extractRed},${extractGreen},${extractBlue})`;
})



// rgb copy

function rgbToClipboard() {
    navigator.clipboard.writeText(rgbVal.textContent) ;
    alert("rgb value is copied");
}

rgbCopy.addEventListener("click",rgbToClipboard);