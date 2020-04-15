type FunctionCallType = "std-library" | "user-function"

export interface TConstant {
  type: "constant";
  value: any;
}

export interface TConstantAssignment {
  type: "constant-assignment";
  id: string;
  name: string;
  value: TConstant | TFunctionCall;
}

export interface TFunctionCall {
  type: FunctionCallType
  id: number;
  arguments: TCodeStatement[];
  name: string;
  alias: string[];
}

export interface TConditional {
  type: "conditional"
  condition: TCodeStatement;
  trueBlock: TCodeStatement[];
  falseBlock?: TCodeStatement[];
}

export type TCodeStatement = TConstant
  | TConstantAssignment
  | TFunctionCall
  | TConditional;

export interface TCodeBlock {
  name: string;
  blockArguments: string[];
  ast: TCodeStatement[];
}

export type TAstToHtml = (
  ast: TCodeStatement,
  index: number
) => JSX.Element | undefined
