import React from "react";
import { TConstantAssignment, TAstToHtml } from "../types/CodeBlockTypes";

import './ConstantAssignmentBlock.css';

export const ConstantAssignmentBlock = (
  {
    ast: { id, name, value },
    index,
    astToHtml
  }:
  {
    ast: TConstantAssignment,
    index: number,
    astToHtml: TAstToHtml
  }
) => {
  return (
    <div key={id} className="constant-assignment">
      <div className="constant-assignment-start">
        <div className="constant-assignment-name">{name}</div>
        <div className="constant-assignment-equal-sign">=</div>
      </div>

      <div className="constant-assignment-value">
        {astToHtml(value, index)}
      </div>
    </div>
  );
}
