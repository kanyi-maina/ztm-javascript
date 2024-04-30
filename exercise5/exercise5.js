const checkDriverAge = (age) => {
  var age = prompt("How old are you?: ");
  if (parseInt(age) === 18) {
    console.log(
      "Congratulations on your first year of driving. Enjoy the Ride"
    );
  } else if (parseInt(age) < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
  } else if (parseInt(age) > 18) {
    console.log("Powering on. Enjoy the ride!");
  }
};

let drive = checkDriverAge();

drive;
