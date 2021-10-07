export const libraryMock = {
  "1": {
    name: "gameLoop",
    blockParameters: ["a"],
    ast: [
      {
        type: "variable-assignment" as const,
        id: "turn",
        name: "turn",
        value: {
          type: "constant" as const,
          value: 0
        }
      },
      {
        type: "variable-assignment" as const,
        id: "board",
        name: "board",
        value: {
          type: "list" as const,
          value: [
            {
              type: "list" as const,
              value: [
                {
                  type: "constant" as const,
                  value: 0
                },
                {
                  type: "constant" as const,
                  value: 0
                },
                {
                  type: "constant" as const,
                  value: 0
                }
              ]
            },
            {
              type: "list" as const,
              value: [
                {
                  type: "constant" as const,
                  value: 0
                },
                {
                  type: "constant" as const,
                  value: 0
                },
                {
                  type: "constant" as const,
                  value: 0
                }
              ]
            },
            {
              type: "list" as const,
              value: [
                {
                  type: "constant" as const,
                  value: 0
                },
                {
                  type: "constant" as const,
                  value: 0
                },
                {
                  type: "constant" as const,
                  value: 0
                }
              ]
            }
          ]
        }
      },
      {
        type: "variable-assignment" as const,
        id: "gameEnded?",
        name: "gameEnded?",
        value: {
          type: "constant" as const,
          value: false
        }
      }
    ]
  },
  "2": {
    name: "conditional",
    blockParameters: ["a"],
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
              id: 101,
              functionArguments: [
                {
                  type: "constant" as const,
                  value: 1
                },
                {
                  type: "constant" as const,
                  value: 5
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
  "3": {
    name: "nested",
    blockParameters: ["a"],
    ast: [
      {
        id: 101,
        functionArguments: [
          {
            id: 101,
            functionArguments: [
              {
                type: "constant" as const,
                value: 1
              },
              {
                type: "constant" as const,
                value: 2
              }
            ],
            name: "plus",
            alias: [],
            type: "std-library" as const
          },
          {
            type: "constant" as const,
            value: 3
          }
        ],
        name: "plus",
        alias: [],
        type: "std-library" as const
      }
    ]
  }
};
