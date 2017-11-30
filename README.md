# Promise

  ```
  const myFirstPromise = new Promise((resolve, reject) => {
  
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
  
});

```

# Fetch

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

https://httpbin.org/

**Supplying your own request object: POST REQUEST**

>Instead of passing a path to the resource you want to request into the fetch() call, you can create a request object using the Request() constructor, and pass that in as a fetch() method argument:

```
var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('flowers.jpg', myInit);

fetch(myRequest).then(function(response) {
  return response.blob();
}).then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});

```

