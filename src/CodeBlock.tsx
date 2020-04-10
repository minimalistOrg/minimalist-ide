import React from "react";
import { TCodeBlock, TCodeStatement, TConstant } from "./types/CodeBlockTypes";

import './CodeBlock.css';

const astToHtml = (ast: TCodeStatement, index: number) => {
  if(ast.type === "constant") {

    return constantToHtml(ast, index);
  } else if(ast.type === "constant-assignment") {

    return (
      <div key={ast.id} className="constant-assignment">
        <div className="constant-assignment-name">{ast.name}</div>
        <div className="constant-assignment-equal-sign">=</div>
        {constantToHtml(ast.value, index)}
      </div>
    );
  } else if(ast.type === "conditional") {
    const conditional = ast;

    return (
      <div key={index} className="conditional">
        <div className="condition-block">
          <div className="condition-start">
            <div className="keyword">if</div>
            <div className="conditional-parenthesis parenthesis parenthesis-opening">
              (
            </div>
          </div>

          <div className="condition">
            {
              conditional.condition.type === "constant" &&
              constantToHtml(conditional.condition, index)
            }
          </div>

          <div className="condition-end">
            <div className="conditional-parenthesis parenthesis parenthesis-closing">
              )
            </div>
            <div className="conditional-bracket bracket bracket-opening">
              {"{"}
            </div>
          </div>
        </div>

        <div className="true-block-body nested">
          {conditional.trueBlock.map(astToHtml)}
        </div>

        { conditional.falseBlock &&
          <div className="false-block">
            <div className="false-block-start">
              <div className="conditional-bracket bracket bracket-closing">
                {"}"}
              </div>
              <div className="keyword">else</div>
              <div className="conditional-else-bracket bracket bracket-opening">
                {"{"}
              </div>
            </div>

            <div className="false-block-body nested">
              {conditional.falseBlock.map(astToHtml)}
            </div>
          </div>
        }

        <div className="conditional-else-bracket bracket bracket-closing">
          {"}"}
        </div>
      </div>
    );
  } else if(ast.type === "std-library") {

    return (
      <div key={ast.id}>
        <button className={`function-call ${ast.type}`}>{ast.name}</button>
        ({ast.arguments.join(", ")})
      </div>
    );
  }
}

const constantToHtml = (constant: TConstant, index: number) => {
  const constantType = typeof constant.value;
  let constantValue = constant.value.toString();

  const style = {
    "--constant-color-value": `var(--constant-color-${constantType})`
  } as React.CSSProperties;

  if(constantType === "string") {
    constantValue = `"${constantValue}"`;
  }

  return (
    <div
      className={`constant-value constant-value-${constantType}`}
      key={index}
      style={style}
    >
      {constantValue}
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
