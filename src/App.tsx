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
              type: "constant-assignment" as const,
              id: "one",
              name: "one",
              value: {
                type: "constant" as const,
                value: 3
              }
            }
          ]
        }
      ]
    ]
  });

  return (
    <div className="App">
      {editorState.callCollections.map((callCollection, index) =>
        <FunctionCallCollection callCollection={callCollection} key={index} />
      )}
    </div>
  );
};
