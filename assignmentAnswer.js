var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function() {


    let newPromise  = new Promise(function(resolve,reject){

        setTimeout(function() {
            resolve('https://httpbin.org/put');
        },3000)
    })
    .then(function (data) {
        return fetch(data,{
          method : 'PUT',
            headers : {
            'Content-Type' : 'application/JSON',
            'Accept' : 'application/JSON'

            },
            body:JSON.stringify({person: {name: 'Max', age: 28}})
        })

    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            output.textContent=data.json.person.name;
        })
        .catch(function (err) {
            console.log(err);
        });





});
