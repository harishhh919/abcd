let promise =new Promise(function(resolve,reject){
    console.log("wait for promise");
    setTimeout(function() {
        //let data="promise is resolved,data mil gaya";
        let err='promise is rejected,paise nhi dungi';
       // resolve(data);
       reject(err);
    }, 2000);
})

promise.then(function(data){
    console.log(data);
    
}).catch(function(){
    console.log(err);
        
})