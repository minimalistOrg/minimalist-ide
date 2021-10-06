import React from "react";
import { TConditional, TAstToHtml } from "../types/CodeBlockTypes";
import { ConstantBlock } from "./ConstantBlock";

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
      <div className="statement-block condition-block">
        <div className="statement-start">
          <div className="keyword">if</div>

          <div className="conditional-parenthesis parenthesis parenthesis-opening">
            (
          </div>
        </div>

        <div className="statement-body">
          {
            condition.type === "constant" &&
            <ConstantBlock ast={condition} index={index} />
          }
        </div>

        <div className="statement-end condition-end">
          <div className="conditional-parenthesis parenthesis parenthesis-closing mr">
            )
          </div>
          <div className="conditional-bracket bracket bracket-opening">
            {"{"}
          </div>
        </div>
      </div>

      <div className="statement-block-nested">
        <div className="statement-body">
          {trueBlock.map(astToHtml)}
        </div>
      </div>

      { falseBlock &&
        <div className="statement-block-nested false-block">
          <div className="statement-start false-block-start">
            <div
              className="conditional-bracket bracket bracket-closing mr-if-not-nested"
            >
              {"}"}
            </div>
            <div className="keyword mr">else</div>
            <div className="conditional-else-bracket bracket bracket-opening">
              {"{"}
            </div>
          </div>

          <div className="statement-body">
            {falseBlock.map(astToHtml)}
          </div>
        </div>
      }

      <div className="statement-end bracket bracket-closing">
        {"}"}
      </div>
    </div>
  );
};
