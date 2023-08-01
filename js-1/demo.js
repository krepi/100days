let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars')

let maxAllowedChars = productNameInputElement.maxLength;
function updateRemainingCharacters(event){
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let reaminingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = reaminingCharacters;

};

productNameInputElement.addEventListener('input', updateRemainingCharacters);