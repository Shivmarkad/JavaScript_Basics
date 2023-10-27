
function singleton() {
    const professor = function (name,sub) {
        this.name = name
        this.sub = sub
    }
    let subProfessor;

    this.subProfessor = function(name, sub){
        if(!subProfessor){
            subProfessor = new professor(name, sub)
        }
        return subProfessor;
    }
}

let institute = new singleton()

console.log(institute.subProfessor('Shiv', 'Math'))
console.log(institute.subProfessor('ramesh', 'Physics'))
