import React from "react";
import { TCodeBlock, TCodeStatement } from "./types/CodeBlockTypes";

import './CodeBlock.css';

const astToHtml = (ast: TCodeStatement) => {

  if(ast.type === "constant") {
    const constantType = typeof ast.value;
    let constantValue = ast.value.toString();

    const style = {
      "--constant-color-value": `var(--constant-color-${constantType})`
    } as React.CSSProperties;

    if(constantType === "string") {
      constantValue = `"${constantValue}"`;
    }

    return (
      <div key={ast.id} className="constant">
        <div className="constant-name">{ast.name}</div>
        <div className="constant-equal-sign">=</div>
        <div
          className={`constant-value constant-value-${constantType}`}
          style={style}
        >
          {constantValue}
        </div>
      </div>
    )
  } else if(ast.type === "std-library") {
    return (
      <div key={ast.id}>
        <button className={`function-call ${ast.type}`}>{ast.name}</button>
        ({ast.arguments.join(", ")})
      </div>
    );
  }
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
