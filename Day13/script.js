let obj={
    name:'Ameer Hamza',
    age:26,
    email:'ameerhamza@gmail.com'
}

console.log(Object.keys(obj));

console.log(Object.entries(obj));

let obj2={...obj};
console.log(obj2);
let obj3=Object.assign({},obj);
let obj4=Object.assign({price:'infinity'},obj);
console.log(obj3);
console.log(obj4);
let obj5={
    name:'Ameer Hamza',
    age:26,
    email:'ameerhamza@gmail.com',
    address:{

        City:'Sargodha',
        Village:'Dhool Kadhi'
    }
}
let obj6={...obj5};//If it contains nested objects then
// the nested object passes his reference and the real
// object have real copy
obj6.address.City='Sahiwal'
let obj7=JSON.parse((JSON.stringify(obj5)));
obj7.address.City='Khusahb';
console.log(obj6);
console.log(obj7);

///Agar object ki property ka naam change ho jay then 
// hum question mark sign use karty hain

obj?.address?.City  //this is optional if exist then
// give if not exist then don't give error


let role='admin';
let admin={
    name:'Ameer Hamza',
    age:26,
    email:'ameerhamza@gmail.com',
    address:{
        city:'Sargodha'
    },
    [role]:'Hamza'
}



// /////////////////////Questions /////

let que={
    name:'Hamza',
    age:26,
    isEnrolled:true,
}


//////// can object key boolean or no

const que1={
    true:'yes',
    34:'yes',

}

console.log(que1[true]);



const user={
    'first-name':'Ameer',
}
console.log(user['first-name']);
let key="age";
const user2=
{
    age:25,
}
console.log(user[key]);




const locations={
    city:'Lahore',
    coordinates:{
        lat:23,
        lng:34
    },

}
console.log(locations?.coordinate?.lat);//bo error just undefined given

const {city}=locations;
let {lat}=locations.coordinates;




const user12={
    'first-name':'Hamza',
}

let {"first-name":firstName}=user12;
console.log(firstName);

for(let key in user12){
    console.log(key);
}


const course={
    title:'Javascript',
    duration:'4weeks',
}
console.log(Object.entries(course));

Object.entries(course).forEach((val)=>{
    console.log(`${val[0]}: ${val[1]}`);
})



const original={a:1,b:2};

const clone={...original};

console.log(clone);

const ob={info:{score:80}};
const clone1={...ob};
clone1.info.score=100;
console.log(clone1.info.score);

console.log(JSON.parse(JSON.stringify(ob)));

const key1='role';
const lock={
    name:'Hamza',
    [key1]:'admin',
}
