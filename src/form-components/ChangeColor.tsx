import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colorList = [
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "pink",
        "brown",
        "orange"
    ];
    const [color, setColor] = useState<string>(colorList[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colorList.map((colorList: string) => (
                <Form.Check
                    data-testid="colored-text"
                    style={{ backgroundColor: colorList }}
                    key={colorList}
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id={colorList}
                    label={colorList}
                    value={colorList}
                    checked={colorList === color}
                />
            ))}
            <div>You have chosen </div>
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}.
            </span>
        </div>
    );
}
