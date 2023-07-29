
let paragraphElement = document.querySelector('p');


function changeParagraphText(){
    paragraphElement.textContent= 'clicked';
}

paragraphElement.addEventListener('click', changeParagraphText);


let inputElement = document.querySelector('input');

function retrieveUsetInput (event){
    // let enteredText = inputElement.value;
    let  enteredText = event.target.value;
    // let enteredText = event.data; => roznica (pojedynczy znak)
    console.log(enteredText);
    console.log(event);
}

inputElement.addEventListener('input',retrieveUsetInput );