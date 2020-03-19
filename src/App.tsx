import React, { useState } from "react";
import { FunctionCallCollection } from "./FunctionCallCollection";

import './App.css';

export const App = () => {
  const [editorState] = useState({
    callCollections: [
      [
        {
          name: "double",
          blockArguments: ["a"],
          ast: [
            {
              id: 3,
              arguments: ["a", "a"],
              name: "plus",
              alias: []
            }
          ]
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
