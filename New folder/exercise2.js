const greet = (name = "", age = 30, pet = "cat") => `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`;

greet("Nick", undefined, "gorilla");
