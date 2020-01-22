console.log("combos");
//% = modulous (gives remainder)
const evenOdd = (num) => {
    if (num % 2 == 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
};

console.log(evenOdd(7));
console.log(evenOdd(2));
console.log(evenOdd(10));


const opposite = (number) => {
    return (-number);
    //or return num * (-1)
};

console.log('opposite', opposite(-9));
console.log('opposite', opposite(5));
console.log('opposite', opposite(-100));

const palindrome = (text) => {

const cleanText = text.toLowerCase().replace(' ', '');
const reversedText = cleanText.split('').reverse().join('');
    console.log('text', cleanText);
    console.log('palindrome', palindrome)
if (cleanText === reversedText) {
    return true
} else {
    return false
}
};


console.log(palindrome('racecar'));
console.log(palindrome('mom'));
console.log(palindrome('rat'));
console.log(palindrome('hello'));



const animal = (str) => {
    if (str.toLowerCase() === 'alligator') {
        return 'small'
    } else {
        return 'wide'
    }
};

console.log(animal("alligator"));
console.log(animal('fish'));
console.log(animal('ALLigator'))