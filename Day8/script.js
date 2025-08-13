//The name of the variable is also a function
let fnc=function(){
    console.log('heyheyhey');

    //if we save function name in variable we say
    // it function expression

}
fnc();


//functino declaration

// function abcd(){

// } this is called functino declaration



// fat arrow function
let fnc1=()=>{
    console.log('Hey Hamza');

}
fnc1();



function Dance(v1){
    console.log(`${v1} nach raha ha `)
}
Dance('ghoda');
Dance('hiran');
Dance('cheel');



function add(v1,v2){ ///these are parameter
    console.log(v1+v2);
}
add(1,2);//these are arguments
add(11,2);




////////////////Default Rest and spread parameter ///////////////////


///default parameter

function add1(alpha=0,beta=0){
    console.log(alpha);
    console.log(alpha+beta);

}
// add1();
add1(1,2,);

////////////Rest parameter ////////////

function add2(... val){
    console.log(val);
}

add2(1,2,3,4,5,6,6,7,8);

//Jab arguments kai sary hon tu hamey utne hi 
// parameter bananay pady gay, issey bachne keliye
// hum rest ka use karte hain ... rest operator or spread
//  agar ... function ke parameter mein lage to wo
// rest operator ha and agar wo arrays and objects
// mein lage to wo spread operator hota ha

function lakh(a,b,c,...val){
    console.log(a,b,c);
    console.log(val);
}
lakh(1,2,3,4,5,6,7,8);



////////////////Return aur early return keyword;


//return matlab jaahn se aaye ho wahi daal denge

function returnstat(v){
    return 12+v;
}
let val=returnstat(23);
console.log(returnstat());



/////////////////////First class fncs -> //////////
//functions ko values ki tarah treat kar sakte hain
let firstclass=function(){

}

function firstclass1(val){
    val();
}
firstclass1(function(){
    console.log('hey');
})

//////////////////////Higher order function //////
// hof wo function hota ha jo ki return kare 
// function ya fir accept kary aik function apne
// parameter mein

function hof(){ // this function is a higher order
    // function 
    
}

// hof(function(){

// })

function hof1(){
    return function(){
        console.log('heyhey')
    }


}
////////// one braces to call the function and other
// braces to call the other one
hof1()()





///// pure vs impure functions

// aisa function jo ki bahir ki value se answer na
// badle ya bahir ki value ko na badle pure function
 
function pure(){
    console.log('heeheh');//yeh bahir ki value nahi
    // badal raha
}


// aisa function jo bahir ki value ko badal de 
// impure function khelata ha side effects hoty 
// hain is k

let imp=12;

function impure(){
    imp++;
}






///closure --> ek function jo return kary aik aur
// function aur return hone wala function use 
// kary ga parent functio ka koi variable

function closure(){
    let a=12;
    return function(){
        console.log(a);
    }
}


///////////lexical scoping //////

//variable ka scope hota ha matlab jis tarah 
// neche dia hoa ha variable ki physical position
// ka scope kya ha function k andar 
// banany wala variable bus function 
// k andar hi access ho skata ha


function lexical(){
    let a=12;
    function defg(){
        let b=12;
        function ghij(){
            let c=12;
        }
    }
}


//////////////IIF   Immidiately invoked function 

(function(){
    console.log('lakh lakh')

})() ///this is called immidiately invoked function


/////////Hoisiting different between 
// variable ya function ko banany se pehle
// access kar rahy hoty ho k agy kahin wo bana hoa
// ha lainkin agar variable bana k access karo gay
// tu nahi chaly ga 

hoisiting();
// hoisiting1(); /// this will give an error





function hoisiting(){
    console.log('heyeye');
}

let hoisiting1=()=>{

}


