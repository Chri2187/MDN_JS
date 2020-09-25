let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
// returns 'I love chocolate frogs'
let madeAString2 = myArray.join();
// returns 'I,love,chocolate,frogs'
let madeAString3 = myArray.join(':');

console.log(madeAString3);