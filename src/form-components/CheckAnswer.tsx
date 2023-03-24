import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");
    const [symbol, setSymbol] = useState<string>("❌");

    function updateGivenAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
        if (event.target.value === expectedAnswer) {
            setSymbol("✔️");
        } else {
            setSymbol("❌");
        }
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formGivenAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={givenAnswer}
                    onChange={updateGivenAnswer}
                />
            </Form.Group>
            <div>{symbol}</div>
        </div>
    );
}
