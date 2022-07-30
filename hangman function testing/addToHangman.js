let layout = ['', 'o', '', '-', '|', '-', '/', '', '\\'];
let emptyLayout = layout.map(i => i = ' ');

let currentInd = 0

function hangmana(answer) {
  
  if (!answer) {
    if (layout[currentInd] === '') {
      currentInd += 1;
    }
    emptyLayout[currentInd] = layout[currentInd];
    currentInd += 1;
    console.log(emptyLayout);
  }
  if (currentInd >= 8) console.log("you lose!");
}

hangmana(false)
hangmana(false)
hangmana(false)
hangmana(false)
hangmana(false)
hangmana(false)
// COMPLETE