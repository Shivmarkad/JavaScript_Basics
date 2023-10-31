
// setTimeout in funciton 

for(var i = 1; i< 4; i++){
    function close(x) {
        setTimeout(function (){
            console.log(x)
        },x * 1000)
    }
    close(i)
}