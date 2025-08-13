// string,number,boolean,null,undefined
// ,symbol,bigint,arrays,objects,functions
// '' -- single Quotes
//" " -- double quotes
// `` -- backticks


//12 -- number data type 
//12.4 -- number

////boolean
let a=true;
let b=false;


// null 
//null ka matlab ha ap ne jan boojh kar koi value nahi di
let selectedStudents=null;

console.log(selectedStudents);

//undefined
//undefined ka matlab k ap ne aik varaible banaya aur us 
// ko value nahi di tu jo value by default mili us ko 
// khete hain undefined javascript engine deta ha value

let alpha;

console.log(alpha);

//symbol -> unique immutable value;


//future mein hum koi librarires use karega ab is case mein
// un libraries main kai baar kuch fields hoti ha jisne
// similar hum bhi banaa dete hain aur galti se hamari 
//  banai hoi fields us library ki original fields ko
// change kar deta ha

let u1=Symbol('anythingyouwant');
let u2=Symbol('anythingyouwant');

let obj={
    uid:1,
    name:'Hamza',
    age:12,
    email:'fuckyou@gmail.com',
};

let u3=Symbol('uid');
obj.uid=34;

console.log(obj);






let max=Number.MAX_SAFE_INTEGER();//You can take maximum integer to this 
console.log(max);


let bigger=12234334342333223n; // big int value
//and if you want to add some value into this then 
// you had also add n with the value;




//Arrays,objects,function
//brackets k bad kisi bhi kism ka brackets nazar aay
//tu  referemce pass ho ga
let arr=[1,2,3,4];
let barr=arr;
console.log(arr);
console.log(barr);
let obj={
    hey:'Hamza',
}
let obj1=obj;
console.log(obj);
console.log(obj1);



//Dynamic Typing -> jis mein static typing nahi ha and yaah 
// per hai dynamic typing jiska matlab ha app data ko change
// kar skate ho kyuki yahan per dynamic data types ha

let hhey=12;
hhey=true;
hhey='Hamza';
hhey=null;
hhey=undefined;


console.log(typeof(hhey))
console.log(typeof(NaN))
console.log(typeof(obj));


////type of quirks(1=='1)  true but (1==='1) false;



//type coercison --> comcept jismein apka ek type a
// autmoatically convert ho jay ga


console.log("2"+1);
console.log("5"-1);//it will subtract the string with number




// Truthy vs falsy value'
// 0 false "" null undefined NAN document.all all these
//  values are false; with this trick !!"" we can check
// it is false or true;

//Remaining all will be converted into truthy values

if(-1){
    //this will convert into true;
}













