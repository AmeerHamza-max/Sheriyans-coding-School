let i=1;
while(i<=15){
    if(i%2!=0){
        console.log("Odd Number",i);
    }
    i++;
}

for(let i=1;i<=10;i++){
    console.log("5 *",i,"=",5*i);
}


/////////////Q#6

let sum=0;
for(let i=1;i<101;i++){
    sum+=i;

}
console.log(sum);




for(let i=1;i<51;i++){
    if(i%3==0){
        console.log('Divisible by 3',i);
    }

}

// let val=prompt('Give a number');
// for(let i=1;i<=val;i++){
//     if(i%2==0){
//         console.log('Even',i);
//     }
//     else{
//         console.log('odd',i);
//     }
// }

for(let i=1;i<101;i++){
    if(i%3==0){
        console.log('Divisible by 3',i);
}
    if(i%5==0){
        console.log('Divisible by 5',i);
    }
}



for(let i=1;i<=101;i++){
    if(i%7==0){
        break;
    }
    console.log(i);
}


for(let i=1;i<101;i++){
    if(i%3===0){
        continue;
    }
    console.log(i);
    
}
let count=0;
for(let i=1;i<=100;i++){
    if(i%2!=0){
        console.log(i);
        count++;
        
    }
    if(count==5){
        break;
    }
}






////////Functions in js  /////////////////

// what is function why how 

// agar code likh dia tu wo foran chal jata ha 

console.log('hey');


function dance(){
    console.log('hey');
    console.log('hey');
    console.log('hey');
    console.log('hey');
    console.log('hey');
    console.log('hey');

}
dance();
dance();
dance();
dance();
dance();



function function_Name(){
    console.log('Happy new year')
}
function_Name();