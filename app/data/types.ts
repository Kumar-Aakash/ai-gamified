export type QuestionOption = string;

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
  multiple?: boolean;
}
