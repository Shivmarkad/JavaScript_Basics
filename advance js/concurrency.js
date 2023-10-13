
function func() {
    console.log("Hey I am Line number 1");
    setTimeout(function () {
        console.log("Hey I am Line number 2");
    }, 2000);
    console.log("Hey I am Line number 3");
}
console.log("Hey I am Line number 4");
func();

// output:
// Hey I am Line number 4
// Hey I am Line number 1
// Hey I am Line number 3
// Hey I am Line number 2