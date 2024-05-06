const todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy",
];

let todosLength = todos.length;
console.log(todos)
for (let i = 0; i < todosLength; i++) {
  todos.pop();
}

console.log(todos);
