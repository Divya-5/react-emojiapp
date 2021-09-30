import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "💥": "Collision",
  "💫": "Dizzy",
  "💦": "Sweat Droplets",
  "💨": "Dashing Away",
  "🐵": "Monkey Face",
  "😐": "Neutral Face",
  "😑": "Expressionless Face"
};
var emojiAvailable = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, emojiMeaning] = useState("");
  function emojiInputSection(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    emojiMeaning(meaning);
    if (meaning === undefined) {
      meaning = "it doesnot exist in database";
    }
    emojiMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    emojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={emojiInputSection} />
      <div>{meaning}</div>
      <h3>Emoji List</h3>
      {emojiAvailable.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
