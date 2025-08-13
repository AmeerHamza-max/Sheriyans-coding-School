console.log(true+false);
console.log(null+1);
console.log(5+'5');
console.log(!!undefined);

// NAN is failed number operation and jab bhi operation
// number ho ga tu us ki data type number ho gi;

let x;
console.log(x);
let y=null;
console.log(y);


//unfined wo value hoti ha jo by default hoti ha 
//aur null wo value hoti ha jo ap khud dete ho

console.log('5'+1);//It converts to the string 51
console.log(5-'1');//It perform subtract operation so answer is 4


//Arithmetic Comparion logical assignment unary ternary
// + - / * % **
// 1+2=3 
// "ha"+'mza'='hamza';It also perform concatination


// 12-2=10; /
// 12/2=6;
// 12*2=6;
// 12%2=0
// 12%3=0
// 2**3=8 


///Comparison
// =   ==   === !=   !== >   <   <= >= 


// =
// equal ka matlab value ko dalna assignment operator


// ==
// kya 12==13  //false;


// 12=='12' -> true; it does not check the type not strict

// 12==='12' -> false;  it also checks the type strict

12!=13;//ture not strict comparison


12!='12' //false


12!=='12'//true



let a=12;
a+=1;

a-=1;

a*=2;

a/=2;


a**=2;


//Arithmetic,Comparison,assignment,logical,unary,ternary
//logical


// && || ! 

// true && true //it will give us ture; 

// false && true it give us false 


// and operator 

//true && false it will give us false;



// or operator 

// true ||true       //   it will give us ture; 

// false ||  true it give us true


//true ||  false it will give us true

//false || false it will give us false

 

// NOt operator


// !! it will give us true value !!12




//Arithmetic,Comparison, Assignment, Logical, unary,ternary

//unary operator

// + - ! typeof ++ --

// +'10' it will convert into number with + operator

//-5 to make a number negative

//!12 not only work with a single value it will change
//the inverted type


//typeof operator give us the type of the data

a=23;
a++;//post increment
console.log(a);

console.log(++a) //pre increment


console.log(--a);//pre decrement 
console.log(a--);//post decrement


//Ternary operator


//?:

// condition ?true hoi ka code :false hoi ka code;
12>13?console.log(true):console.log(false);

console.log(typeof null);

console.log(typeof array);

console.log(typeof NaN);



//to check the array data type real we instance of

a instanceof Array;//to check that it is array or not
//instanceof we use with node permitive av





let score=89;

// let grade=score>=90?'A':score>=75?'