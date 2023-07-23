import React from "react";
import { Collapsible } from "./Collapsible";

export const FAQGrid: React.FC<{
  questions: { title: string; content: string }[];
}> = ({ questions }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {questions.map((question) => {
        return (
          <div className="flex flex-1 items-center justify-center">
            <Collapsible title={question.title} content={question.content} />
          </div>
        );
      })}
    </div>
  );
};