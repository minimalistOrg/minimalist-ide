import React from "react";
import { TConditional, TAstToHtml } from "../types/CodeBlockTypes";
import { ConstantBlock } from "./ConstantBlock";

import './ConditionalBlock.css';

export const ConditionalBlock = (
  {
    ast: { condition, trueBlock, falseBlock },
    index,
    astToHtml
  }:
  {
    ast: TConditional,
    index: number,
    astToHtml: TAstToHtml
  }
) => {
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
            condition.type === "constant" &&
            <ConstantBlock ast={condition} index={index} />
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
        {trueBlock.map(astToHtml)}
      </div>

      { falseBlock &&
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
            {falseBlock.map(astToHtml)}
          </div>
        </div>
      }

      <div className="conditional-else-bracket bracket bracket-closing">
        {"}"}
      </div>
    </div>
  );
};
