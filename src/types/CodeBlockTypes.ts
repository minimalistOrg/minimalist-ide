type TFunctionCallType = "std-library" | "user-function"

export interface TFunctionCall {
  id: number;
  arguments: any[];
  name: string;
  alias: string[];
  type: TFunctionCallType
}

type TConstantValue = number | string | boolean;

export interface TConstant {
  id: string;
  name: string;
  value: TConstantValue;
  type: "constant";
}

export type TCodeStatement = TFunctionCall | TConstant;

export interface TCodeBlock {
  name: string;
  blockArguments: string[];
  ast: TCodeStatement[];
}
