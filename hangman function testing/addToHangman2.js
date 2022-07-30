let layout = ['', 'o', '', '-', '|', '-', '/', '', '\\'];
let emptyLayout = layout.map(i => i = ' ');
let answer = "dollar bill"
let indices = [1, 3, 4, 5, 6, 7, 8];

function hangman(letter) {
  if (!answer.includes(letter)) {
    emptyLayout[indices[0]] = layout[indices[0]];
    indices.splice(0, 1)
    return emptyLayout;
  }
}
console.log(hangman('f'));
console.log(hangman('j'));
console.log(indices[0])
// COMPLETE