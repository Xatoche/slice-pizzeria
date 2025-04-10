fetch("./products.json")
.then(res => res.json())
.then(data => console.log(data))
.then(err => console.log(err));