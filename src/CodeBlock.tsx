import React from "react";
import { TCodeBlock } from "./types/CodeBlockTypes";
import { astToHtml } from "./blockComponents";

import './CodeBlock.css';

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

        <button className="code-block-menu">&hellip;</button>
      </div>

      <div className="code-block-body">
        {ast.map(astToHtml)}
      </div>
    </div>
  );
};
