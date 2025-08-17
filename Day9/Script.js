// What's the differnce between function declaration and expression in terms of hoisting
// Ans: before declaration you can use the function 
abcd();
function abcd(){
    console.log('hello');
}

// Convert function in an arrow function 

let multiply=(a,b)=>{
    return a*b;
}


//identify the parameter and function 
// when declaraing function you pass parameters and when callilng you pass an argument


function sayHI(name='Guest'){
    console.log(name);
}

sayHI();//The output of this function is Guest



// What is mean by ... operator

function dotOperator(...val){
    //dot operator tells the rest operator
    console.log(val);
}
 
dotOperator(1,2,3,4,5,5,6,6,8,9);


//Use rest parameter to accept any number of scores and return total;

function getScore(...scores){
    scores.forEach((score)=>{
        console.log(score);
    })

}
getScore(20,23,34,53,34);






function checkAge(age){
    if(age<18) return 'Too Young';
    return 'Allowed';
}
console.log(checkAge(19));





function f(){
    return;
}
console.log(f());





// What does it means when we say functions are first-class citizens;

// Ans: Your functions can be store in varaible and you can treat functions as a value;


// Can you assign a function to a variable and then call it show how.

// Ans 


let a =function(){

}

a();




// Pass a function into another function and execute it

function xyz(val){
    val();
}
xyz(function(){
    console.log('hey');
})

// What is a higher-order function 

// function return kar de ya as a parameter accept kary aik parameter mein 


// function xyzw(val){
//     val();
// }

// xyzw(function(){

// })


// (function (){
//     let score=0;
//    return { takeScore:function(val){
//         val=score;
//     },
//     }
// })();



// /////////////////// Writing a BMI calculator /////////////////

function bmi(weight,height){
    return weight / (height* height);
}
console.log((bmi(62,5.8).toFixed(2)));



//////////////Discount Calculator
function discountCalculator(discount){
    return function(price){
        return price - price *( discount/100);

    }
}

let doscount=discountCalculator(10);
console.log(doscount(200));

