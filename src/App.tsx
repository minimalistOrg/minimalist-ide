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
              id: "one",
              name: "one",
              value: 1,
              type: "constant" as const
            }
          ]
        }
      ],
      [
        {
          name: "double",
          blockArguments: ["a"],
          ast: [
            {
              id: "one",
              name: "one",
              value: false,
              type: "constant" as const
            }
          ]
        }
      ],
      [
        {
          name: "double",
          blockArguments: ["a"],
          ast: [
            {
              id: "one",
              name: "one",
              value: "string",
              type: "constant" as const
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
