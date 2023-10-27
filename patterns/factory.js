function developer(name){
    this.name = name
    this.type = "developer"
}

function tester(name){
    this.name = name
    this.type = "Tester"
}

function factory(){
    this.create = (name, type) =>{
        switch (type) {
            case 1:
                return new developer(name)
                break;
            case 2:
                return new tester(name)
                break;
        }
    }
}

function details() {
    console.log(`Hey !, ${this.name} your role is ${this.type}`)
}
const myFactory = new factory()

details.apply(myFactory.create('shiv', 1))