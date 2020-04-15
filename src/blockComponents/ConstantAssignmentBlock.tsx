import React from "react";
import { TConstantAssignment, TAstToHtml } from "../types/CodeBlockTypes";

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
      <div className="constant-assignment-name">{name}</div>
      <div className="constant-assignment-equal-sign">=</div>

      {astToHtml(value, index)}
    </div>
  );
}
