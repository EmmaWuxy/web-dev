// Ask for age
let age = Number(prompt("Your age is:"));
// if under 18, reject, equals 18, congrats, else power on
if (age < 18){
    alert("Sorry, you are too young to drive this car. Powering off");
}
else if(age === 18){
    alert( "Congratulations on your first year of driving. Enjoy the ride!");
}
else{
    alert("Powering On. Enjoy the ride!"
    );
}