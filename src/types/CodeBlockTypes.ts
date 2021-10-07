type FunctionCallType = "std-library" | "user-function"

export interface TConstant {
  type: "constant";
  value: any;
}

export interface TList {
  type: "list";
  value: TRightHandSide[];
}

export type TRightHandSide = TConstant
  | TFunctionCall
  | TList

export interface TConstantAssignment {
  type: "constant-assignment";
  id: string;
  name: string;
  value: TRightHandSide;
}

export interface TFunctionCall {
  type: FunctionCallType
  id: number;
  functionArguments: TCodeStatement[];
  name: string;
  alias: string[];
}

export interface TConditional {
  type: "conditional"
  condition: TCodeStatement;
  trueBlock: TCodeStatement[];
  falseBlock?: TCodeStatement[];
}

export interface TVariableAssignment {
  type: "variable-assignment";
  id: string;
  name: string;
  value: TRightHandSide;
}

export type TCodeStatement = TRightHandSide
  | TConstantAssignment
  | TConditional
  | TVariableAssignment;

export interface TCodeBlock {
  name: string;
  blockArguments: string[];
  ast: TCodeStatement[];
}

export type TAstToHtml = (
  ast: TCodeStatement,
  index: number
) => JSX.Element | undefined
