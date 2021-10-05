import React from "react";
import { CodeBlock } from "./CodeBlock";
import { TCodeBlock } from "./types/CodeBlockTypes";

import './FunctionCallRow.css';

export const FunctionCallRow = (
  { callCollection }: { callCollection: TCodeBlock[] }
) => {
  return (
    <div className="fcc">
      {callCollection.map((codeBlock, index) =>
        <CodeBlock {...codeBlock} key={index} />
      )}
    </div>
  );
};
