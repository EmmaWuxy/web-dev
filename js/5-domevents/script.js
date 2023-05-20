var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var dltButtoms = document.querySelectorAll("dltBtn");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// Add delete buttom for each newly created element
	var btn = document.createElement("button");
	btn.setAttribute("class", "dltBtn");
	btn.textContent = 'Delete';
	li.appendChild(btn);

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function toggleDone(target){
	if (target.matches(".item")){
		// console.log(target);
		target.classList.toggle("done");
	}	
}

function deleteListElement(target){
	if (target.matches(".dltBtn")){
		// console.log(target);
		// console.log(target.parentElement);
		target.parentElement.remove();
	}
}

function listElementHandler(event){
	var target = event.target
	// If clicks on the text, toggle done
	toggleDone(target);
	// If clicks on the buttom, delete
	deleteListElement(target);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", listElementHandler);