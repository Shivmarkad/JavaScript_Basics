// Single Responsibility principle
// :- It states that functions and classes should only have one job.

class member{
    constructor(name, role){
        this.name = name, 
        this.role = role,
        this.res = []
    }
    addResponsibility(res){
        this.res.push(res)

        //using notify funtion 
        notify(`Responsibility added ${res}`)
    }
}

// seperated funtionality for notification
function notify(message) {
    console.log(message)
}