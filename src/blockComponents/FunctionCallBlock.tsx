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
    <div className="statement-block function-call" key={`${id}-${index}`}>
      <div className="statement-start">
        <button className={`function-call-name ${type}`}>
          {name}
        </button>

        <div className="function-call-parenthesis parenthesis parenthesis-opening">
          (
        </div>
      </div>

      <div className="statement-body">
        {callArguments.map((callArgument, argumentIndex) => {
          return (
            <div
              className="statement-block"
              key={argumentIndex}
            >
              {astToHtml(callArgument, argumentIndex)}

              {(argumentIndex + 1) < numberOfArguments &&
                <div className="comma">
                  ,
                </div>
              }
            </div>
          );
        })}
      </div>

      <div className="statement-end">
        <div className="function-call-parenthesis parenthesis parenthesis-closing">
          )
        </div>
      </div>
    </div>
  );
}
