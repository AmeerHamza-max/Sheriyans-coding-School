///////////////     //////Objects /////////////////

let obj={
    name:'Hamza',
    age:26,
    khana:'Rice',
};
console.log(obj.age);

console.log(obj['age']);

let aa='name';
// obj.aa literally if we want to convert aa to name
// it does not convert it

 obj[aa];
 console.log(obj);


//  key value structure

let obj1={
    name:'Hamza',
    address:{
        city:'Bhopal',
        pin:'123',
        location:{
            street:'34',
            village:'Dhool Kadhi'
        }
    },
}

console.log(obj1.address.location.street);


// object destructuring 

// let {street,village}=obj.address.location;
// console.log(street,village);

let user={
    name:'Harsh',
    age:26,
    email:'ameerhamzarana0000786@gmail.com',
}
for(let key in user){
    console.log(key, user[key]);
}


console.log(Object.keys(user));


console.log(Object.entries(user));



let user2={...user};
console.log(user2);