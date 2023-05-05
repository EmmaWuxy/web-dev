// Function to check Driver's age
function checkDriverAge(age){
    
    // if under 18, reject, equals 18, congrats, else power on
    if (age < 18){
    console.log("Sorry, you are too young to drive this car. Powering off");
    }
    else if(age === 18){
    console.log( "Congratulations on your first year of driving. Enjoy the ride!");
    }
    else{
    console.log("Powering On. Enjoy the ride!");
    }
}

let age = Number(prompt("Your age is:"));
checkDriverAge();
