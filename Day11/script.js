let arr=[1,2,3,2,4,5,6,7];
let value=arr.find(function(val){
    return val==2;
});
console.log(value);

let arr1=[
    {id:1,key:1,
    id:2,key:2,
    id:3,key:3
    }
];


let value1=arr1.find(function(val){
    return val.key=1;
});

console.log(value1);


let any=arr.some(function(val){
    return val >5;
})

console.log(any);

let any1=arr.every(function(val){
    return val>5;
});

console.log(any1);




let [a,b]=arr;
console.log(a);
console.log(b);

let [,,c]=arr;

console.log(c);

let arr2=[...arr];

arr2.push(34);//there will be no change in arr


///////////////////Questions ////////

let fruit=['apple','guava','banana'];

console.log(fruit[1]);

fruit.push('Mango');
fruit.unshift('pineapple');
console.log(fruit);

fruit.pop();
fruit.push('kiwi');
console.log(fruit);

let number=[1,2,3,4];
number.pop();
console.log(number);

let color=['Green','Yellow'];
color.splice(1,0,'Red','blue');
console.log(color);

let items=[1,2,3,4,5,6,7,8];
let newArr=items.slice(3,5);
console.log(newArr);

let names=['Hamza','Adeel','Bhai','Ha','Apna'];
names.sort().reverse();

console.log(names);


let arr3=[1,2,3,4];

const square=arr3.map(function(val){
    return val*val;
})

console.log(square);


let dotfilter=[4,12,43,23,1,3,5,85];

let newbab=arr.filter((val)=>{
    return val>10;

})
console.log(newbab);


let dotreduce=[10,23,43,23];
let dotreduce1=dotreduce.reduce(function(acc,val){
    return acc+val;

},0);

console.log(dotreduce1);


let dotfind=[1,12,42,2,49];

let dotfind1=dotfind.find(function(val){
    return val<10;
})

console.log(dotfind1);


let dotsome=[53,23,89,87,56,78];

let dotsome1=dotsome.some(function(val){
    return val<35;
})

console.log(dotsome1);


let dotevery=[2,14,12,6,8,10];

let dotevery1=dotevery.every(function(val){
    return val%2===0;
})
console.log(dotevery1);


let fullName=['Ameer','Hamza'];
let [firstName,LastName]=fullName;


let aa=[1,2];
let bb=[3,4];
let cc=[...aa, ...bb];
console.log(cc);



let countries=['Pak','USA'];
countries=[...countries,'China'];
console.log(countries);


///Clone this array properly (not by refernce);

const country=[...countries];
console.log(country);





