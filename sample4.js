const a = prompt('enter a first integer:');
const b = prompt('Enter s 2nd integer :');
const c = prompt('enter s 3rd integer:');

const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

if(result1 == result2 && result1 == result3){
    document.write(`${a}, ${b} and ${c} have the same last digit.`)
}
else {
    document.write(`${a}, ${b} and ${c} have different last digit.`)
}