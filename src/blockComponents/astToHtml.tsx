import React from "react";

import { TCodeStatement } from "../types/CodeBlockTypes";
import {
  AssignmentBlock,
  ConditionalBlock,
  ConstantBlock,
  FunctionCallBlock,
  ListBlock,
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
      <AssignmentBlock
        ast={ast}
        index={index}
        key={index}
        keyword="const"
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

  } else if(ast.type === "list") {
    return (
      <ListBlock
        ast={ast}
        index={index}
        key={index}
        astToHtml={astToHtml}
      />
    )

  } else if(
    ast.type === "std-library"
    || ast.type === "package"
  ) {
    return (
      <FunctionCallBlock
        ast={ast}
        index={index}
        key={index}
        astToHtml={astToHtml}
      />
    );

  } else if(ast.type === "variable-assignment") {
    return (
      <AssignmentBlock
        ast={ast}
        index={index}
        key={index}
        keyword="let"
        astToHtml={astToHtml}
      />
    );

  }
};
