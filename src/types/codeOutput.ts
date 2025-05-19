export interface CodeOutput {
  message: string;
  isError: boolean;
  messageId: string;
}

export interface CodeOutputMap {
  [id: string]: CodeOutput[];
}
