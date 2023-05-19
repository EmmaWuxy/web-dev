let database = [
    {
        username: 'Emma',
        password: '12345',
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

function signIn(user, pass){
    if (user === database[0].username && pass === database[0].password){
        console.log(newsfeed);
    }
    else{
        alert('Sorry, wrong username and password!');
    }
}

signIn(userNamePrompt, passwordPrompt);