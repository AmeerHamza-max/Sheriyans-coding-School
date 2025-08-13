//primitive data types  -> aisi sari values jinko copy karny per tmhe ek real copy mil jay
//string,number,boolean,null,undefined,symbol,bigint





//reference data type  ->inko copy karne per real copy  nahi mile gi per refernce mile ga parent ka
//arrays,objects,functions
// [] , {} ,() 


// It copies
let a=23;
let b=a;
a=a+2;
console.log(a);
console.log(b);

//It does not copy it takes the reference 
let arr=[1,2,3];
let barra=arr;
console.log(arr);
barra=[23,34];
console.log(arr);
console.log(barra);
