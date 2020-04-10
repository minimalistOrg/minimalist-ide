import React from "react";
import { TConstant } from "../types/CodeBlockTypes";

import './ConstantBlock.css';

export const ConstantBlock = (
  {
    ast: { value },
    index
  }:
  {
    ast: TConstant,
    index: number
  }
) => {
  const constantType = typeof value;
  const style = {
    "--constant-color-value": `var(--constant-color-${constantType})`
  } as React.CSSProperties;

  const constantValue = constantType === "string" ?
    `"${value.toString()}"` :
    value.toString();

  return (
    <div
      className={`constant-value constant-value-${constantType}`}
      key={index}
      style={style}
    >
      {constantValue}
    </div>
  );
}
