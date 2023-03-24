import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    const [symbol, setSymbol] = useState<string>("❌");

    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
        if (event.target.value === expectedAnswer) {
            setSymbol("✔️");
        } else {
            setSymbol("❌");
        }
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="allOptions">
                <Form.Label>Select:</Form.Label>
                <Form.Select value={selected} onChange={updateSelected}>
                    {options.map((ops: string) => (
                        <option key={ops} value={ops}>
                            {ops}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{symbol}</div>
        </div>
    );
}
