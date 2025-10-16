export interface Answer {
  options: string;
  isTrue: boolean;
}
export interface Questions {
  question: string;
  answers: Answer[];
  explanation: string;
}

export interface QuestionData {
  topic: string;
  questions: Questions[];
}

export interface AnswerOptions {
  options: string[];
}
