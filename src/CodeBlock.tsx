import React from "react";
import { TCodeBlock, TCodeStatement } from "./types/CodeBlockTypes";
import { ConstantBlock } from "./blockComponents/ConstantBlock";

import './CodeBlock.css';

const astToHtml = (ast: TCodeStatement, index: number) => {
  if(ast.type === "constant") {
    return (
      <ConstantBlock ast={ast} index={index} key={index} />
    )
  } else if(ast.type === "constant-assignment") {

    return (
      <div key={ast.id} className="constant-assignment">
        <div className="constant-assignment-name">{ast.name}</div>
        <div className="constant-assignment-equal-sign">=</div>
        <ConstantBlock ast={ast.value} index={index} />
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
              <ConstantBlock ast={conditional.condition} index={index} />
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
