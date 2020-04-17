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
    <div key={id} className="statement-block constant-assignment">
      <div className="statement-start">
        <div className="constant-assignment-name">{name}</div>
        <div className="constant-assignment-equal-sign">=</div>
      </div>

      <div className="statement-body constant-assignment-value">
        {astToHtml(value, index)}
      </div>
    </div>
  );
}
