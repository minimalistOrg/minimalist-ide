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
              type: "conditional" as const,
              condition: {
                type: "constant" as const,
                value: false,
              },
              trueBlock: [
                {
                  type: "constant" as const,
                  value: 3
                }
              ],
              falseBlock: [
                {
                  type: "constant" as const,
                  value: 5
                }
              ],
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
