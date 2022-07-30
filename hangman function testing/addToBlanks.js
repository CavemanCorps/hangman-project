let phrase = "fuck you"

function turnToBlanks(string) {
  // REPLACE EVERY LETTER EXCEPT SPACE WITH "_" 
  let string3 = string.split('').map(e => e !== ' ' ? '_' : ' ').join('');    
  return string3
}
let blanks = turnToBlanks(phrase);
console.log(phrase.length, blanks.length)

function changeBlanks(letter) {
  //  GIVEN A LETTER, SEE IF THAT LETTER IS IN "PHRASE". IF SO, REPLACE "_" WITH THAT LETTER
  if (phrase.includes(letter)) {
    blanks = blanks.split('').map((a, index) => phrase[index] === letter ? letter : a).join('')
  }
  else console.log('nope');
}
changeBlanks('u');
changeBlanks('f');
console.log(blanks);
changeBlanks('q');
// COMPLETE