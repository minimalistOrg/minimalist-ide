import React from "react";
import { TConstantAssignment, TAstToHtml } from "../types/CodeBlockTypes";

import './AssignmentBlock.css';

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
        <div className="assignment-name">{name}</div>
        <div className="assignment-equal-sign">=</div>
      </div>

      <div className="statement-body assignment-value">
        {astToHtml(value, index)}
      </div>
    </div>
  );
}
