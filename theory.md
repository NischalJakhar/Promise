Async code is wrapped inside a promise.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
``new Promise( /* executor */ function(resolve, reject) { ... } );``


executor
    A function that is passed with the arguments resolve and reject. The executor function is executed immediately by the Promise implementation, passing resolve and reject functions (the executor is called before the Promise constructor even returns the created object). The resolve and reject functions, when called, resolve or reject the promise, respectively. The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve function to resolve the promise or else rejects it if an error occurred.
    If an error is thrown in the executor function, the promise is rejected. The return value of the executor is ignored. 
    

