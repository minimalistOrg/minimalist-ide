type FunctionCallType = "std-library" | "user-function"

export interface TFunctionCall {
  id: number;
  arguments: any[];
  name: string;
  alias: string[];
  type: FunctionCallType
}

export interface TCodeBlock {
  name: string;
  blockArguments: string[];
  ast: TFunctionCall[];
}
