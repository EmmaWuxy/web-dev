//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1;  //4
const object3 = object2;  //4
const object4 = { a: 5};  //5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal{
    constructor(name, type, color){
        super(name, type, color);
    }
    sound(){
        console.log(`Moooo ~ I am ${this.name}, a ${this.type} that is ${this.color}.`);
    }
}

let cow = new Mamal('Alex', 'cow', 'black and white');
console.log(cow.sound());