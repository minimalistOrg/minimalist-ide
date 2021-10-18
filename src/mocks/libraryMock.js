export const libraryMock = {
  "1": {
    name: "gameLoop",
    blockParameters: ["a"],
    ast: [
      {
        type: "variable-assignment",
        id: "turn",
        name: "turn",
        value: {
          type: "constant",
          value: 0
        }
      },
      {
        type: "variable-assignment",
        id: "board",
        name: "board",
        value: {
          type: "list",
          value: [
            {
              type: "list",
              value: [
                {
                  type: "constant",
                  value: 0
                },
                {
                  type: "constant",
                  value: 0
                },
                {
                  type: "constant",
                  value: 0
                }
              ]
            },
            {
              type: "list",
              value: [
                {
                  type: "constant",
                  value: 0
                },
                {
                  type: "constant",
                  value: 0
                },
                {
                  type: "constant",
                  value: 0
                }
              ]
            },
            {
              type: "list",
              value: [
                {
                  type: "constant",
                  value: 0
                },
                {
                  type: "constant",
                  value: 0
                },
                {
                  type: "constant",
                  value: 0
                }
              ]
            }
          ]
        }
      },
      {
        type: "variable-assignment",
        id: "gameEnded?",
        name: "gameEnded?",
        value: {
          type: "constant",
          value: false
        }
      },
      {
        type: "constant-assignment",
        id: "boardSize",
        name: "boardSize",
        value: {
          type: "package",
          id: 201,
          functionArguments: [
            {
              type: "constant",
              value: (row) => row.lenght,
            },
            {
              type: "constant",
              value: 1,
            }
          ],
          name: "R.sum",
          alias: []
        }
      }
    ]
  },
  "2": {
    name: "conditional",
    blockParameters: ["a"],
    ast: [
      {
        type: "conditional",
        condition: {
          type: "constant",
          value: false,
        },
        trueBlock: [
          {
            type: "constant-assignment",
            id: "x",
            name: "x",
            value: {
              type: "std-library",
              id: 101,
              functionArguments: [
                {
                  type: "constant",
                  value: 1
                },
                {
                  type: "constant",
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
            type: "constant",
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
                type: "constant",
                value: 1
              },
              {
                type: "constant",
                value: 2
              }
            ],
            name: "plus",
            alias: [],
            type: "std-library"
          },
          {
            type: "constant",
            value: 3
          }
        ],
        name: "plus",
        alias: [],
        type: "std-library"
      }
    ]
  }
};
