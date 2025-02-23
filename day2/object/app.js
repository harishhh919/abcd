//object

// let person= {
//     name : 'sanu',
//     age : '21',
//     favColor : 'skyblue'
// }

// //console.log(person);

// console.log(person.name);

// //console.log(person.age);

// console.log(person['age']);

// //change properties in object
// person.name='sanu khot';
// console.log(person);

// //adding new property
// person.gender='female';
// console.log(person);

// //delete property
// delete person.favColor
// console.log(person);

//advance object

let person ={
    name :'sanuu',
    age :21,
    favColor : 'skyblue',
    fun: function print() {
        return(`my name is ${this.name} and my age is ${this.age}`)
    },
    newObj :{
        gender : "female",
        address :"Borgaonwadi"
    }
}
//console.log(person.fun);

//console.log(person.fun());

console.log(person.newObj.address);




