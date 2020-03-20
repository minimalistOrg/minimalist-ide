type FunctionCallType = "std-library" | "user-function"

export interface TFunctionCall {
  id: number;
  arguments: any[];
  name: string;
  alias: string[];
  type: FunctionCallType
}

export interface TConstant {
  id: string;
  name: string;
  value: any;
  type: "constant";
}

export type TCodeStatement = TFunctionCall | TConstant;

export interface TCodeBlock {
  name: string;
  blockArguments: string[];
  ast: TCodeStatement[];
}
