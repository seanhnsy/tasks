import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function addAttempt(): void {
        setAttempts(attempts + 1);
    }

    function subAttempt(): void {
        setAttempts(attempts - 1);
        setProgress(!progress);
    }

    function inProgress(): void {
        setProgress(!progress);
    }

    return (
        <div>
            <span>{attempts}</span>
            <Button onClick={subAttempt} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={inProgress} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
