export interface TFunctionCall {
  id: number;
  arguments: any[];
  name: string;
  alias: string[];
}

export interface TCodeBlock {
  name: string;
  blockArguments: string[];
  ast: TFunctionCall[];
}
