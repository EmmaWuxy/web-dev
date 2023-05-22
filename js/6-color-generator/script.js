var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

console.log(body.style.background);


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	
	displayColorGradient();
}

function getColorGradient(){
	return getComputedStyle(body).getPropertyValue("background-image");
}

function displayColorGradient(){
	css.textContent = getColorGradient() + ";";
}

function rgbToHex(r, g, b){
	return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function generateRandomHex(){
	return"#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

function randomBgr(){
	color1.value = generateRandomHex();
	color2.value = generateRandomHex();
	setGradient();
}

displayColorGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomBgr)

// Colour inputs match the background generated on the first page load
var gradientRgbArr = getColorGradient().match(/[\d\.]+/g);
color1.setAttribute("value", rgbToHex(gradientRgbArr[0], gradientRgbArr[1], gradientRgbArr[2]));
color2.setAttribute("value", rgbToHex(gradientRgbArr[3], gradientRgbArr[4], gradientRgbArr[5]));