var database = {
  Nicholas: "mysecretword",
  Grace: "wifematerial",
};

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
  if (database[user] === pass) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong password!");
  }
};

signIn(userNamePrompt, passwordPrompt);
