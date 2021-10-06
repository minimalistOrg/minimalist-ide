import React from "react";
import { CodeBlock } from "./CodeBlock";
import { TCodeBlock } from "./types/CodeBlockTypes";

import './FunctionCallRow.css';

export const FunctionCallRow = (
  { functionRow }: { functionRow: TCodeBlock[] }
) => {
  return (
    <div className="fcr">
      {functionRow.map((codeBlock, index) =>
        <CodeBlock {...codeBlock} key={index} />
      )}
    </div>
  );
};
