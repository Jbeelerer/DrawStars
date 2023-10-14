import "./App.css";
import React from "react";
import P5Sketch from "./P5Sketch";

function App() {
  return (
    <>
      <div className="container">
        <div className="sketch">
          <>
            <div className="returnButton">
              <div className="text">reset</div>
              <div className="iconReturn"></div>
            </div>
            <div className="mainBody"></div>
            <div className="lowerWindow">
              Tippe um ein Zeichen zu setzen{" "}
              <div className="sendWindow">
                <div className="text"> abflug </div>
                <div className="sendIcon"></div>
              </div>
            </div>
            <P5Sketch />
          </>
        </div>
      </div>
    </>
  );
}

export default App;
