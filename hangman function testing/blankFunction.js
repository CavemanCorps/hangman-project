function turnToBlanks(string) {
  let string3 = string.split(' ').map(a => a.split(''));
  let string4 = [];
  for (let i = 0; i < string3.length; i++) {
    string4.push(string3[i].map(s => s = "_").join(' '))
  }
  return string4.join('  ')
}
console.log(turnToBlanks('fuck you'))

