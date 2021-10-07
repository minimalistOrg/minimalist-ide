import React from "react";
import { CodeBlock } from "./CodeBlock";
import { libraryMock } from "./mocks/libraryMock";

import './FunctionCallRow.css';

type TmpFunctionId = keyof typeof libraryMock;

export const FunctionCallRow = (
  { functionRow }: { functionRow: string[] }
) => {
  return (
    <div className="fcr">
      {functionRow.map((functionId, index) => {
        const codeBlock = libraryMock[functionId as TmpFunctionId];

        return (
          <CodeBlock {...codeBlock} key={index} />
        );
      }
      )}
    </div>
  );
};
