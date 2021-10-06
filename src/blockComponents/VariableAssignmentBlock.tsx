import React from "react";
import { TVariableAssignment, TAstToHtml } from "../types/CodeBlockTypes";

import './AssignmentBlock.css';

export const VariableAssignmentBlock = (
  {
    ast: { id, name, value },
    index,
    astToHtml
  }:
  {
    ast: TVariableAssignment,
    index: number,
    astToHtml: TAstToHtml
  }
) => {
  return (
    <div key={id} className="statement-block variable-assignment">
      <div className="statement-start">
        <div className="keyword keyword-let mr">let</div>
        <div className="assignment-name mr">{name}</div>
        <div className="assignment-equal-sign mr-if-not-nested">=</div>
      </div>

      <div className="statement-body assignment-value">
        {astToHtml(value, index)}
      </div>
    </div>
  );
}
