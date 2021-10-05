import React from "react";
import { TVariableAssignment, TAstToHtml } from "../types/CodeBlockTypes";

import './AssignmentBlock.css';
import './VariableAssignmentBlock.css';

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
        <div className="keyword keyword-let">let</div>
        <div className="assignment-name">{name}</div>
        <div className="assignment-equal-sign">=</div>
      </div>

      <div className="statement-body assignment-value">
        {astToHtml(value, index)}
      </div>
    </div>
  );
}
