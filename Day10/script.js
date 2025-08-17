// closures 
function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
let cnt=counter();
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());

let d=counter();
console.log(d());
console.log(d());
console.log(d());
console.log(d());





//Create a pure function to transform a value

function double(val){
    return val*2;
}
console.log(double(5));


//IIFE to isolate variables

(function(){
    const password="secret password";
    console.log(password);
})();
// console.log(password); This will through an error because 
// in iffe this is secret variable







////////////////////// Confusion

// in objects you did not use fat arrow function

// when you use variable to store function it will give an error as hoisting perform







/////////////////////   Arrays ////////////////////

let arr=[1,2,3,4];  /// This is a data structure

// 0 index =1;
// 1 index=2;
console.log(arr[3]);

console.log(arr[4]);

let array=new Array();


arr[4]=12;
console.log(arr);



let arr1=[1,2,3,4,5,6];
arr.push(7000)// dot and brackets are called methods
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
arr.unshift(49);
let newArr=arr.slice(1,4); //this will create a new array
console.log(newArr);

console.log(arr.splice(1,2));

arr.reverse();
console.log(arr);

let arr2=[11,62,3,4,25];

let a=arr.sort(function (a,b){
    return a-b;
})
console.log(a);


//sort map filter reduce accept the function


arr.forEach(function (val){
    console.log(val+5);
    
})


// map sirf tab use akrna ha jab apko ek naya array
// banana ha pichle array ka data ka basis per

// map dikhte hi sath demag mein aik blank aray bana lia karo

let newarr=arr.map(function(val){
    if(val>10){
        return val;
    }
    return 12;//if you did not return it return undefined
})

//jab bhi apko aisa koi case dikh jay jaha per aik array 
// naya array banege and wo naya array mein rakhe ga tab map lage ga

console.log(newarr);


// filter bhi aik naia array banata ha 

let arr4=[12,3,53,23,11];
let filarr=arr4.filter(function(val){
    // return true or false 
    // return true;//is ka matlab value nya array mein jay gi
    if(val>4){
        return true;
    }
})




let reduce=[1,2,3,4,5,6];

// jab array k sary num ko aik number mein jod dein tab
//reduce lagy ga
let reducefunc=reduce.reduce(function(pre,curr){
    return pre+curr;//accumulator+val;
},0)//there the value of accumlator value starts and yeh
//yad rakhta ha value ko return hone k bad bhi
console.log(reducefunc);