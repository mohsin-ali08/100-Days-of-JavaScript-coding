

// how to create promise and promise syntax of promise


//    assign in variable 
const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("print after 3 seconds:")
       resolve()
    }, 3000);
});

promiseOne.then(function(){
    console.log("promise consumed :");
});




// without assign to variable
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("met you after 2 seconds:");
        resolve();
    }, 2000)
}).then(() => {
    console.log("connected to resolve and promise consumed now");
});





new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({user:"mohsin", phone:"0909090", email:"mosisurhio@gmail.com",})
    }, 2000);
}).then((user)=>{
    console.log(user);
});