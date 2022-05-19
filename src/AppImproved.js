import React, { useState, useEffect } from "react";
import "/src/styles.css";

const CHALLENGES = [
  "homer simpson",
  "patrick star",
  "timmy turner",
  "whinnie the pooh",
  "peter griffin",
  "goofy",
  "beavis",
  "rick sanchez",
  "jerry the mouse"
];

let layouts = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "o", "", "", "", "", "", "", ""],
  ["", "o", "", "-", "", "", "", "", ""],
  ["", "o", "", "-", "|", "", "", "", ""],
  ["", "o", "", "-", "|", "-", "", "", ""],
  ["", "o", "", "-", "|", "-", "/", "", ""],
  ["", "o", "", "-", "|", "-", "/", "", " \\"]
];

function App() {
  //const [currIndex, setCurrIndex] = useState(3); // FIX THIS SHIT
  //const [currLayout, setCurrLayout] = useState(layouts[0]); // FIX THIS SHIT
  const [challenge, setChallenge] = useState("...");
  const [letter, setLetter] = useState("Enter letter. Good luck 😊");
  const [blanks, setBlanks] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [layout, setLayout] = useState(layouts[0]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  // THIS SHIT IS CALLED AT START UP BY SECOND USE HOOK
  const generatePhrase = () => {
    const randomChallenge =
      CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];

    //  LETTER SPACING HERE
    const currentBlanks = randomChallenge
      .split("")
      .map((e) => (e !== " " ? "-" : " "))
      .join("");
    setChallenge(randomChallenge);
    setBlanks(currentBlanks);
  };

  const handleKeyPress = (e) => {
    const newMarkdown = e.target.value;
    const newLetter = newMarkdown.charAt(e.target.value.length - 1);
    setMarkdown(newMarkdown);
    setLetter(newLetter);
  };

  const reset = () => {
    window.location.reload(); // RELOAD THE SCREEN FUNCTION
  };

  useEffect(() => {
    if (blanks === challenge) {
      setWinner(true); // moved this from the "else if" to here and that worked
    }

    //let tempChallenge = challenge.split("").map((a) => (a = a.toUpperCase()));
    if (challenge.includes(letter)) {
      let newBlanks = blanks
        .split("")
        .map((a, index) => (challenge[index] === letter ? letter : a))
        .join("");
      setBlanks(newBlanks);
    } else if (
      letter !== "Enter letter. Good luck 😊" &&
      !challenge.includes(letter)
    ) {
      // FIX THIS SHIT
      // SO FUCKING CLOSE
      //let newLayout = layouts.splice(1, layouts.length);
      // FINALLY GOT THIS SHIT WORKING. MADE ANOTHER COPY IN CASE I FUCK UP
      if (layouts.length - 1 > 1) {
        layouts.shift();
        setLayout(layouts[0]);
      } else {
        setGameOver(true);
        setLayout(["", "o", "", "-", "|", "-", "/", "", " \\"]);
      }
      //console.log(layout);
    }
  }, [letter, blanks, challenge]);
  useEffect(() => {
    generatePhrase(); // Should only execute at start, so no dependency array needed
  }, []);
  // NEW SHT LEARNED: EMPTY DEP ARRAY MUST BE GIVEN OR THE HOOK WILL KEEP RUNNING

  return (
    <div id="myHangman">
      <h2 id="layback">
        {layout.slice(0, 3)} <br /> {layout.slice(3, 6)} <br />{" "}
        {layout.slice(6, 9)}
      </h2>
      <h1>
        <pre>{blanks}</pre>
      </h1>
      <textarea
        id="input"
        onChange={handleKeyPress}
        value={markdown}
        disabled={(gameOver, winner)}
      />
      <h3>{letter}</h3>

      <div className="button-div">
        {" "}
        {/* ONLY RENDERED WHEN THE GAME IS OVER */}
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Restart Game?
          </button>
        )}
        {/* A BIT CONFUSED ON HOW THIS SYNTAX WORKS -NEVER SEEN IT BEFORE */}
      </div>

      <div className="winner-message">
        {" "}
        {/* ONLY RENDERED WHEN THE GAME IS OVER */}
        {winner && (
          <button className="button" onClick={() => reset()}>
            You Win! Play Again?
          </button>
        )}
      </div>
    </div>
  );
}
export default App;
