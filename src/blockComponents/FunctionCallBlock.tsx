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
  return (
    <div key={`${id}-${index}`}>
      <button className={`function-call ${type}`}>{name}</button>
      ({callArguments.map(astToHtml)})
    </div>
  );
}
