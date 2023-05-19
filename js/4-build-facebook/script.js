let database = [
    {
        username: 'Emma',
        password: '12345',
    },
    {
        username: 'Alex',
        password: 'aaaa',
    },
    {
        username: 'Emma',
        password: '3434',
    }
];

let newsfeed = [
    {
        username: 'Alex',
        timeline: 'heyyy'
    },
    {
        username: 'Bobby',
        timeline: 'yoooo'
    },
    {
        username: 'Seline',
        timeline: 'hellooo'
    }
];

let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

function isUserValid(username, password){
    for (let i=0; i<database.length; i++){
        if(database[i].username === username && database[i].password === password ){
            return true;
        }
    }
    return false;
}

function signIn(username, password){
    if (isUserValid(username, password)){
        console.log(newsfeed);
    }
    else{
        alert('Sorry, wrong username and password!');
    }
}

signIn(userNamePrompt, passwordPrompt);