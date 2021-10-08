import React from "react";
import { TConstantAssignment, TAstToHtml } from "../types/CodeBlockTypes";

import './AssignmentBlock.css';

export const AssignmentBlock = (
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
        <div className="keyword keyword-const mr">const</div>
        <div className="assignment-name mr">{name}</div>
        <div className="assignment-equal-sign mr-if-not-nested">=</div>
      </div>

      <div className="statement-body assignment-value">
        {astToHtml(value, index)}
      </div>
    </div>
  );
}
