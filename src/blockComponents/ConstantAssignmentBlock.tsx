import React from "react";
import { TConstantAssignment } from "../types/CodeBlockTypes";
import { ConstantBlock } from ".";

export const ConstantAssignmentBlock = (
  {
    ast: { id, name, value },
    index
  }:
  {
    ast: TConstantAssignment,
    index: number
  }
) => {
  return (
    <div key={id} className="constant-assignment">
      <div className="constant-assignment-name">{name}</div>
      <div className="constant-assignment-equal-sign">=</div>

      <ConstantBlock ast={value} index={index} />
    </div>
  );
}
