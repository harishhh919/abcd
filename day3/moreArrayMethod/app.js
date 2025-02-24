//for-each

let arr=[1,2,3,4,5]


//map()
// let newArr=arr.map(function(item,index){
//     console.log(`${item*item}`);
    
// })

//filter()
let newArr=arr.filter(function (item,index){
    if (item>3) {
        console.log(item);
        return true;
    }
    return false;
    
})