import React, { useState } from "react";
import { FunctionCallCollection } from "./FunctionCallCollection";

import './App.css';

export const App = () => {
  const [editorState] = useState({
    callCollections: [
      [
        {
          name: "plus",
          blockArguments: ["a", "b"],
          ast: "a + b",
        }
      ]
    ]
  });

  return (
    <div className="App">
      {editorState.callCollections.map(callCollection =>
        <FunctionCallCollection callCollection={callCollection} />
      )}
    </div>
  );
};
