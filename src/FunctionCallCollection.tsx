import React from "react";
import { CodeBlock } from "./CodeBlock";
import { TCodeBlock } from "./types/CodeBlockTypes";

import './FunctionCallCollection.css';

export const FunctionCallCollection = (
  { callCollection }: { callCollection: TCodeBlock[] }
) => {
  return (
    <div className="fcc">
      {callCollection.map(codeBlock =>
        <CodeBlock {...codeBlock} />
      )}
    </div>
  );
};
