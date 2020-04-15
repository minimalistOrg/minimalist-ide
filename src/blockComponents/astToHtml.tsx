import React from "react";

import { TCodeStatement } from "../types/CodeBlockTypes";
import { ConditionalBlock, ConstantBlock } from ".";

export const astToHtml = (ast: TCodeStatement, index: number) => {
  if(ast.type === "constant") {
    return (
      <ConstantBlock ast={ast} index={index} key={index} />
    )
  } else if(ast.type === "constant-assignment") {
    return (
      <div key={ast.id} className="constant-assignment">
        <div className="constant-assignment-name">{ast.name}</div>
        <div className="constant-assignment-equal-sign">=</div>
        <ConstantBlock ast={ast.value} index={index} />
      </div>
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
      <div key={ast.id}>
        <button className={`function-call ${ast.type}`}>{ast.name}</button>
        ({ast.arguments.map(astToHtml)})
      </div>
    );
  }
};
