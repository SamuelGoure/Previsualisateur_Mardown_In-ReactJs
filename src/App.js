import React, { useState } from "react";
import "./App.css";
import { marked } from "marked";

function App() {
  // State

  const [texte, setTexte] = useState("mon textaera par defaut");

  // function

  const changeTexHandler = (event) => {
    setTexte(event.target.value);
    console.log(marked(texte));
  };

  // const markdownToHTML = () => {
  //   return { __html: Marked(texte) };
  // };

  return (
    <div className="App">
      <div className="elements">
        <div className="element">
          <textarea
            rows="30"
            value={texte}
            onChange={(e) => changeTexHandler(e)}
          ></textarea>
        </div>
        <div className="element"> {marked(texte)} </div>
      </div>
    </div>
  );
}

export default App;
