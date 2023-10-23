// console.log(this)

// function get(get) {
//     // let name = 'shiv'
//     this.name = get
//     console.log(this.name)
// }
// let my = new get('s')

// get('hey')

let myobj = {
    data: 'shiv',

    getDetails: function(){
        console.log(this.data)
    }
}

myobj.data = 'markad'
myobj.getDetails()