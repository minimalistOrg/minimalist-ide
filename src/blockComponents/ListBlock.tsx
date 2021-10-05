import React from "react";
import { TAstToHtml, TList, TRightHandSide } from "../types/CodeBlockTypes";

export const ListBlock = (
  {
    ast: { value },
    index,
    astToHtml
  }:
  {
    ast: TList,
    index: number,
    astToHtml: TAstToHtml
  }
) => {
  return (
    <div className="statement-block" key={index}>
      <div className="statement-start list-opening">
        [
      </div>

      <div className="statement-body">
        {value.map((element: TRightHandSide, elementIndex: number) => {
            return astToHtml(element, elementIndex)
        })}
      </div>

      <div className="statement-end list-closing">
        ]
      </div>
    </div>
  );
}
