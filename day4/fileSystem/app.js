let fs = require('fs');

// //perform CURD Operations

let data = "certification course";

// //task-1 create a file and write data into it

// fs.writeFile('demo.txt',data,{
//     encoding:'utf-8'
// },(err)=>{
//     if(err) throw err;
//     console.log("file is created successfully");
    
    
// })

//way2
// fs.writeFileSync('demo.txt',data,
//     (err)=>{
//             if(err) throw err;
//             console.log("file is created successfully");
            
//     })


//     //read a file
//     let fileread=fs.readFileSync('demo.txt');
//     console.log(fileread.toString());
    
// //update a file
// fs.appendFileSync('demo.txt', 'i hope this weather will be same for next day')

// //delete data
// fs.unlinkSync('demo.txt');

fs.writeFileSync('demo.txt',data,
    (err)=>{
            if(err) throw err;
            console.log("full 10 days");
            
    })


    //read a file
    let fileread=fs.readFileSync('demo.txt');
    console.log(fileread.toString());

    
    //to delete previous data from file
    //fs.truncateSync('demo.txt')
    
//update a file
fs.appendFileSync('demo.txt', ' it will continue')




