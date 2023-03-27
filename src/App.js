import React, { useState } from "react";
import "./App.css";

const App = () => {
  // State

  const [texte, setTexte] = useState("mon textaera par defaut");

  // function

  const changeTexHandler = (event) => {
    setTexte(event.target.value);
  };

  return (
    <div className="App">
      <div className="elements">
        <div className="element">
          <textarea
            rows="30"
            value={texte}
            onChange={(e) => changeTexHandler(e)}
          >
            Ajoute moi
          </textarea>
        </div>
        <div className="element"> {texte} </div>
      </div>
    </div>
  );
};

export default App;
