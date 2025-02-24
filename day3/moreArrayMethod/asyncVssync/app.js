
//sync
// console.log("firs");
// console.log("second");
// console.log("third");

//async
// console.log("first");
// setTimeout(function(){
//      console.log("it will print after 4sec");
    
//  },2000)
// console.log("third");

//setInterval()
// setInterval(function(){
//     console.log("it will run after 2 sec" );
    
// },2000)

let count=0;
let intervalID=setInterval(function(){
    count++;
    console.log(`my count is ${count}`);

    if(count==10){
        clearInterval(intervalID);
        console.log('task completed');
        
    }
},1000)



