"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = require("./users");
var fs = require("fs");
var user = {
    name: "Shiv",
    age: 30,
    language: ["PHP", "Go", "css"],
};
users.push(user);
fs.writeFile("users.json", JSON.stringify(users), function (err) {
    if (err)
        throw err;
    console.log("Done writing"); // Success
});
fs.readFile("users.json", function (err, data) {
    if (err)
        throw err;
    var users = JSON.parse(data);
    console.log(users); // Print users
});
