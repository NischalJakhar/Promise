var promise = new Promise(function(resolve,reject){

//resolve("This is executed.");
reject({code:500, message: "An error"});

});

promise.then(function(text){
return text;
}).then(function(newText){
consoe.log(newText);
}).catch(function(err){
console.log(err.code,err.message);
});
