//DOM
// Document object model
// Every tag in html is called node yeh node hi ap 
// k elements ko le k agy badhty hain
// DOM Manipulatio
//It is tree like structure


//dom=body
// 1.select element with html
// 2.To change text
// 3.to change html
// 4.to change css
// 5.to change attribute
// 6.event listeners



// let abcd=document.getElementById('hey')
// console.log(abcd);
// console.dir(abcd); 

// let ab =document.getElementsByClassName('hey');
// console.log(ab); 
// console.dir(ab);

let abcd=document.querySelector('h1');//it selects first elemet
console.log(abcd);
console.dir(abcd);

let abcd1=document.querySelectorAll('h1');
console.log(abcd1);
console.dir(abcd1)

abcd.textContent='Hi Hamza kaisy ho'//change the text
abcd.innerHTML='Hamza thek ha' //change the html
abcd.innerText='Hamza badhiya ha';//change the text


// abcd.hidden=true; Hides the content





////////////////// Attribute manipulation //////////


let a=document.querySelector('a');

console.log(a);


a.href='https://www.google.com';


a.setAttribute('href','https://www.facebook.com');