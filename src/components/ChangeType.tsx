import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function flipType(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }

    let text: string;
    if (type === "short_answer_question") {
        text = "Short Answer";
    } else {
        text = "Multiple Choice";
    }

    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {
                <div>
                    <span>{text}</span>
                </div>
            }
        </div>
    );
}
