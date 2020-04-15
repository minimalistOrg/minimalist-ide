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
                  type: "constant-assignment" as const,
                  id: "x",
                  name: "x",
                  value: {
                    type: "std-library" as const,
                    id: 4,
                    arguments: [
                      {
                        type: "constant" as const,
                        value: "a"
                      },
                      {
                        type: "constant" as const,
                        value: "a"
                      }
                    ],
                    name: "plus",
                    alias: []
                  }
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
        },
      ],
      [
        {
          name: "test",
          blockArguments: ["a"],
          ast: [
            {
              id: 3,
              arguments: [
                {
                  id: 4,
                  arguments: [
                    {
                      type: "constant" as const,
                      value: "a"
                    },
                    {
                      type: "constant" as const,
                      value: "a"
                    }
                  ],
                  name: "plus",
                  alias: [],
                  type: "std-library" as const
                }
              ],
              name: "plus",
              alias: [],
              type: "std-library" as const
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
