// let CHALLENGES = {1: "foo bar", 2: "trigger", 3: "fater, ghost, holy spirit",
//                    4: "Jesus Christ", 5: "holy water", 6: "holy 40 bible"}
// let diffs = {easy: Object.entries(CHALLENGES).slice(0, 2), mid: Object.entries(CHALLENGES).slice(2, 4), 
//             hards: Object.entries(CHALLENGES).slice(4, 6)}
const CHALLENGES = {easy: ['foo bar', 'trigger', 'porous'], mid: ['Jesus Christ', 'holy 40 water', 'holy bibliophile'],
                    hard: ['Judas Escargot', 'all seeing eye', 'ale bumbaye']}


function getRandPhrase(difficulty) {
  const phrases = CHALLENGES[difficulty];
  return phrases[Math.floor(Math.random() * phrases.length)];  /* a random property's value from CHALLENGES */
}

console.log(getRandPhrase('easy'));
