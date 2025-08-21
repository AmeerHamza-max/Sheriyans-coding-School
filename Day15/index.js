let img=document.querySelector('img');
img.setAttribute('src','https://images.unsplash.com/photo-1701303813706-9f9114f7e62d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwbWlycm9yfGVufDB8fDB8fHww');
let a=document.querySelector('a');
console.log(a.getAttribute('href'));

a.removeAttribute('href');



// Dynamic Dom Manipulation

let h1=document.createElement('h1');
h1.textContent='Hello Hamza';
document.body.appendChild(h1);
console.log(h1);

//create element
// prepend means body k pehle add ho ga aur append means body k end pe add ho ga
// append/prepend karo jaha bhi element chahiya waha

let h2=document.createElement('h2');
console.log(h2);

h2.textContent='This is Hamza';
document.querySelector('body').append(h2);

let h3=document.querySelector('h3');
h3.remove(h3);

let h32=document.createElement('h3');
h32.textContent='Hey mein bahir se aya hn';

document.querySelector('div').appendChild(h32);
document.querySelector('div').prepend(h32);







//Manipulating css


let cssh3=document.querySelector('h3');
cssh3.style.color='red';
cssh3.style.backgroundColor='yellow';
cssh3.style.fontFamily='sarns-serif';

h1.classList.add('lock')
h1.classList.remove('lock');
h1.classList.toggle('lock');



// What is the DOM How does it represent the html Structure
// Name the types of node in the DOM tree
// Element node and textnode differnece
// p tag is element node and inside the text is text node
