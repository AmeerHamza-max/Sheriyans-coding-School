let x=10;
let y=3;
if(x>5 &&y<5){
    console.log('A');
}
else{
    console.log('B');
}

let isAdmin=true;
isLoggedIn=false;
if(isAdmin || isLoggedIn){
    console.log('Access Granted');
}
else{
    console.log('Access denied')
}


let temp=35;

if(!(temp<30)){
    console.log('hot');
}
else{
    console.log('Pleasant');
} 

let a=0;
if(a){
    console.log('Truthy');
}
else{
    console.log('Falsy');
}

let score=78;
let grade=score >=90 ? 'A':score>=75 ?'B':score>=60?'C':'Fail';
console.log(grade);


let points=120;

let status= points>100 ?'Gold':points>50?'Silver':'Bronze';
console.log(status);


let loggedin=true;
let hasToken=false;
let Access=loggedin && hasToken ?'Allow':'Deny';
console.log(Access);



let aa=5;
aa++;
console.log(aa);
let b=7;
++b;
console.log(b);

let xx=4;
let yy=x++;
console.log(x,y);

let p=4;
let q=++p;
console.log(p,q);

let m=10;
console.log(m--);
console.log(m);

let n=5;
let result=n++  +  ++n;
console.log(n);

let likes=100;
function likePost(){
    return ++likes;

}
console.log(likePost());
console.log(likes);

let count=5;
if(count-- ===5){
console.log('Matched');
}
else{
    console.log('Not matched');
}


!!'' //false;
!!'hello' //true;
!!0//false;
!!1 //true;

//Pre vs Post Increment;

let i=1;
console.log(++i);//2;
console.log(i++);//2 and then i will be 3;



// if else else-if
//switch case
//early return pattern

// if(condition -> t|f);

// if(12>13){

// }

// if(65) then it will be truthy falsy concept

if(65){

}
else{

}


if(loggedin){

}
else if(loggedin && isAdmin)
{

}
else{

}


//switch case

// switch(value){
//     case 1:
//         break;
//     case 2:
//         break;
//     case 3:
//         break;
//     default:
//         break;
// }

//If we did not make a break the code will execute
// all the cases;


//early return pattern

function getVal(val){
    if(val<100) return 'A';
    else if(val<75) return 'B';
    else if (val<50) return 'C';
    else return 'D';
}
console.log(getVal(89));



function getGrade(score){
    if(score > 90 && score <= 100){
        return 'A';
    }
    else if(score>=80 && score<=89){
        return 'B';
    }
    else if(score>=70 && score<=79){
        return 'C';
    }
    else if(score>=79 && score<=69){
        return 'D';
    }
    else if(score>=69 && score<=59){
        return 'E';
    }
    else if(score>=59 && score<=49){
        return 'F';
    }
    else if(score>=49 && score<=39){
        return 'G';
    }
    else if(score<=32 && score>=0){
        return 'fail'
    }
    else{
        return 'Invalid Marks';
    }

}
console.log(getGrade(78));

//rock paper sicsor

function rps(user,computer){
    // if(user==='rock' && computer=='scissor') return 'user';
    // if(user=='scissor' && computer=='rock') return 'computer';
    // if(user=='paper' && computer=='rock') return 'user';
    // if(user=='rock' && computer=='paper') return 'computer';
    // if(user=='scissor' && computer=='rock') return 'computer';
    // if(user=='scissor' && computer=='rock') return 'computer';
    if(user===computer)return 'drawa';
    if(user==='rock' && computer=='scissor') return 'user';
    if(user==='scissor' && computer=='paper') return 'user';
    if(user==='paper' && computer=='rock') return 'user';

    return 'computer';


}
console.log(rps('rock',"rock"));
