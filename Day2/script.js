///scope global,block,functional


//global scope
var a=12; //var don't respect the block scope var is functional scoped


{
// block scope 
}
//function scope
function abcd(){
    if(true){
        var c=23;
    }
}

//reassigning 
let b=12;
b=14;

//redeclaration is possible with var but not possible with let

var a=12;
var a=23;
let a=12;
// let a=43; // this will thorugh an error;


///Temporal Dead Zone //js ko pata tu ha variable exist karta ha per wo value nahi de sakta

console.log(aaaaa);  /// This will give an error reference error aaaaa cannot access before initialization

let aaaaa=12;



/////////Hoisting per type

//hoisting -> aik variable ko jab js mein banate hain tu wo variable 
// 2 hiso mein totata ha and uska declare part upar chala jata ha aur uska initialization part neeche reh jata ha

var a=12;
var a=undefined;
a=12;

//you can access the value of a before initialization this is called hoisiting



// hoisting teeno mein hoti ha 
let a=undefined;
console.log(a);
a=12;





