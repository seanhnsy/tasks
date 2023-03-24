import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("0");

    function subAttempts() {
        setAttempts(attempts - 1);
    }

    function gainAttempts() {
        const amount = parseInt(requested) || 0;
        setAttempts(attempts + amount);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attempts}</div>
            <Form.Group controlId="formRequestedAttempts">
                <Form.Label>Request:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequested(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={subAttempts} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={gainAttempts}>Gain</Button>
        </div>
    );
}
