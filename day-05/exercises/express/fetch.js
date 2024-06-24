
fetch('http://localhost:3000/',{
    method:"GET"
}).then(response=>response.json())
.then(data=>console.log(data));