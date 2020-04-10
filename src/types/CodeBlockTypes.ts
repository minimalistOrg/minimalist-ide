type FunctionCallType = "std-library" | "user-function"

export interface TConstant {
  type: "constant";
  value: any;
}

export interface TConstantAssignment {
  type: "constant-assignment";
  id: string;
  name: string;
  value: TConstant;
}

export interface TFunctionCall {
  type: FunctionCallType
  id: number;
  arguments: any[];
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
