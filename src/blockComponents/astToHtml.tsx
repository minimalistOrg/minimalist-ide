import React from "react";

import { TCodeStatement } from "../types/CodeBlockTypes";
import {
  ConditionalBlock,
  ConstantAssignmentBlock,
  ConstantBlock,
  FunctionCallBlock
} from ".";

export const astToHtml = (ast: TCodeStatement, index: number) => {
  if(ast.type === "constant") {
    return (
      <ConstantBlock
        ast={ast}
        index={index}
        key={index}
      />
    );

  } else if(ast.type === "constant-assignment") {
    return (
      <ConstantAssignmentBlock
        ast={ast}
        index={index}
        astToHtml={astToHtml}
      />
    );

  } else if(ast.type === "conditional") {
    return (
      <ConditionalBlock
        ast={ast}
        index={index}
        key={index}
        astToHtml={astToHtml}
      />
    );

  } else if(ast.type === "std-library") {
    return (
      <FunctionCallBlock
        ast={ast}
        index={index}
        astToHtml={astToHtml}
      />
    );

  }
};
