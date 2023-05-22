var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

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

function displayColorGradient(){
	css.textContent = getComputedStyle(body).getPropertyValue("background-image") + ";";
}

displayColorGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// Colour inputs match the background generated on the first page load
//color1.setAttribute("value", body);