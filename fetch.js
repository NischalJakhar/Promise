//Sending get request via fetch and parsing the response as json which gives o/p as {origin: "103.217.244.161"} the ip address that
//was requested.

fetch('https://httpbin.org/ip').then(function (response) {
   console.log(response);
   return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function (err) {
    console.log(err);

});

//POST request

fetch('https://httpbin.org/post',{
    method : 'POST',
    headers : {
        'Content-Type' : 'application/JSON',
        'Accept' : 'application/JSON'
    },
    mode : 'cors',
    body : JSON.stringify({message : 'Does this work?'})
})
    .then(function (response) {
    console.log(response);
    return response.json();
})
    .then(function(data){
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);

    });
