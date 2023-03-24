import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    const [text, setText] = useState<string>(" is a student");

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
        if (event.target.checked === true) {
            setText(" is a student");
        } else {
            setText(" is not a student");
        }
    }

    function blankName() {
        setName("");
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="in-edit-mode"
                label="Enable Edit Mode"
                checked={inEditMode}
                onChange={updateEditMode}
            />
            <div>
                {name} {text}
            </div>
            {inEditMode && (
                <Form.Group controlId="formEditName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onClick={blankName}
                        onChange={updateName}
                    />
                </Form.Group>
            )}
            {inEditMode && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={student}
                    onChange={updateStudent}
                />
            )}
        </div>
    );
}
