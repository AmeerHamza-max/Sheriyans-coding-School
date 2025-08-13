let x=2;
switch(x){
    case 2:
    console.log('Two');
    case 3:
        console.log('Three');
        //output two three (bug if break is missing);
}

//////////Loops////////
//repeat karny ko loop khete hain
//for while do-while forin forof foreach
//1 1 1 1 1 1 1 1 1
//1 2 3 4 5 6 7 8 9

//kaha se jana ha --> kaha tak jaana ha -> kaise jana ha
//for
// 1-50 

//kaha se jana ha -> kab rukhna ha -> kab jana ha 
// 1 - 
//while

// 1- 40 for 
// 20-30 for 
// hello na aa jaye - while
//laal color ka ped - while









//for loop
// const array=[1,2,3];
// for (let start = 0; end < array.length; change++) {
//     const element = array[start];
//     console.log('Hey')
    
// }

// start;

// while(end){
//     //code
//     change;
// }
let i=1;
while(i<32){
    console.log(i);
    i++;
}
// do{

// }while(end);
console.log('do-while')

do{
    console.log(i);
    if(i==40) break;
    i++;
}while(i<64)




// Print numbers from 1 to 10 using for loop 

for(let i=1;i<=10;i++){
    console.log(i);
}

let j=10;
while(j>=1){
    console.log(j);
    j--;
}
let k=1;
for(k=1;k<=20;k++){
    if(k%2==0){
        console.log('even number',k);
    }
}