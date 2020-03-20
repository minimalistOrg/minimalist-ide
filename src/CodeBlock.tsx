import React from "react";
import { TCodeBlock, TFunctionCall } from "./types/CodeBlockTypes";

import './CodeBlock.css';

const astToHtml = (ast: TFunctionCall) => {
  return (
    <div key={ast.id}>
      <button className={`function-call ${ast.type}`}>{ast.name}</button>
      ({ast.arguments.join(", ")})
    </div>
  );
}

export const CodeBlock = (
  { name, blockArguments, ast }: TCodeBlock
) => {
  // Add namespace

  return (
    <div className="code-block">
      <div className="code-block-header">
        <div className="code-block-name">
          {name}
          <span className="code-block-arguments">
            {`(${blockArguments.join(", ")})`}
          </span>
        </div>

        <button className="code-block-close">&times;</button>
      </div>

      <div className="code-block-body">
        {ast.map(astToHtml)}
      </div>
    </div>
  );
};
