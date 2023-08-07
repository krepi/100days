function greet() {
    console.log("siemeczka");
}

greet();


function sumUp(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}
const inputValues = [1,2,3,4,5,6,7,8,9,10]

console.log(sumUp(...inputValues))

console.log(sumUp)