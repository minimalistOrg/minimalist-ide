export const fakeCallRows = {
  callRows: [
    [
      {
        name: "gameLoop",
        blockArguments: ["a"],
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
          }
        ]
      }
    ],
    [
      {
        name: "conditional",
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
                  callArguments: [
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
        name: "nested",
        blockArguments: ["a"],
        ast: [
          {
            id: 3,
            callArguments: [
              {
                id: 4,
                callArguments: [
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
};
