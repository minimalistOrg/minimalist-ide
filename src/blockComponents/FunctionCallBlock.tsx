import React from "react";
import { TAstToHtml, TFunctionCall } from "../types/CodeBlockTypes";

import './FunctionCallBlock.css';

export const FunctionCallBlock = (
  {
    ast: { id, callArguments, name, type },
    index,
    astToHtml
  }:
  {
    ast: TFunctionCall,
    index: number,
    astToHtml: TAstToHtml
  }
) => {
  const numberOfArguments = callArguments.length;

  return (
    <div className="function-call" key={`${id}-${index}`}>
      <button className={`function-call-name ${type}`}>
        {name}
      </button>

      <div className="function-call-arguments">
        <div className="function-call-parenthesis parenthesis parenthesis-opening">
          (
        </div>

        {callArguments.map((callArgument, argumentIndex) => {
          return (
            <div
              className="function-call-argument"
              key={argumentIndex}
            >
              {astToHtml(callArgument, argumentIndex)}

              {(argumentIndex + 1) < numberOfArguments &&
                <div className="function-call-argument-comma">
                  ,
                </div>
              }
            </div>
          );
        })}

        <div className="function-call-parenthesis parenthesis parenthesis-closing">
          )
        </div>
      </div>
    </div>
  );
}
