//create an object
let x = {
    name: "baliram ",
    age: 25
}
let y = {
    name: "shiv ",
    age: 25, 
    mark: 23
}

// acess any value using the key
//from key you can access value but from value you cannot access a key
/*
why we cannot access a value from a key ?
---> in an object keys are unique , but mutiple diff keys can ahve same value object

*/
console.log(x["name"])
console.log(y.name)
console.log(y.age)
console.log(x.age)

// are objects mutable?
//yes 

y.name="tanmay"
console.log(y)

//how to dd new property to already created object

x.mark=100; //if mark key is present it will update otherwise it adds it
x["company"] ="google";
console.log(x)

//delete key value pair
//we can use delete oprator 

delete x.name;
console.log(x)
