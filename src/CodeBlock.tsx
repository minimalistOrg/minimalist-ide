import React from "react";
import { TCodeBlock } from "./types/TCodeBlock";

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

        <button className="code-block-close">&times;</button>
      </div>

      <div className="code-block-body">
        {ast}
        {/* a <button className="function-call">+</button> b */}
      </div>
    </div>
  );
};
