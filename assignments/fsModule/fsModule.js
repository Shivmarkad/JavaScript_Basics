const users = require("./users");

const fs = require("fs");


let user = {
  name: "Shiv",
  age: 30,
  language: ["PHP", "Go", "css"],
};

users.push(user);

fs.writeFile("users.json", JSON.stringify(users), (err) => {
  if (err) throw err;

  console.log("Done writing"); // Success
});

fs.readFile("users.json", function (err, data) {
  if (err) throw err;
 
  const users = JSON.parse(data);

  console.log(users); // Print users
});
