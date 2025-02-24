
function Details(name,age,place) {
    this.name="sam";
    this.age="18";
    this.place="bhoj";
    this.description=function(){
        return (`my name is ${this.name}, my age is ${this.age}`)
    }
}

let user1=new Details("sanu",21,"Bgm");
let user2=new Details("abhi",22,"npn");

console.log(user1);
//console.log(user1.description());

console.log(user2);
console.log(user2.description());


