export type BlockTypes = "code" | "text";

export type CodeLanguage = "javascript" | "typescript";

export interface Block {
  id: string;
  type: BlockTypes;
  content: string;
  language?: CodeLanguage;
}
