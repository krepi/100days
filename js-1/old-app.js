// add an element

// 1. Create the new element
let newAelement = document.createElement('a');
newAelement.href = 'https://google.com';
newAelement.textContent= 'link to google'
// 2. Get acces to the parent element that should hold the new element
let firstpP = document.querySelector('p');

// 3. Insert the new element into the parent element content
firstpP.append(newAelement);

// remove elements
// 1 Select element to be removed
let firstH1element = document.querySelector('h1')
// 2 Remove it!
firstH1element.remove();

//MOVE ELEMENTS

// 1 Access element
firstpP.parentElement.append(firstpP);
// 2 Move element

// inner HTML

 firstpP.innerHTML = 'hi this is <strong>paragraf</strong>'