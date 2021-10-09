import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function App() {
  function createEntry(prop) {
    return <Entry name={prop.name} emoji={prop.emoji} meaning={prop.meaning} />;
  }
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)};</dl>
    </div>
  );
}

export default App;
