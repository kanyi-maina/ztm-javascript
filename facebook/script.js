var database = 
  {
    username: "Nicholas",
    password: "mysecretword",
  }
;

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all this amazing learning",
  },
  {
    username: "Sally",
    timeline: "JavaScript is SOOOO cool!",
  },
];

var userNamePrompt = prompt("What is your name?");
var passwordPrompt = prompt("What is your password?");

const signIn = (user, pass) => {
  if (user === database.username && pass === database.password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong password!");
  }
};

signIn(userNamePrompt, passwordPrompt);