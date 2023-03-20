import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface doubleHalfProps {
    dhValue: number;
    setDhValue: (dhValue: number) => void;
}

function Doubler(props: doubleHalfProps): JSX.Element {
    return (
        <Button onClick={() => props.setDhValue(2 * props.dhValue)}>
            Double
        </Button>
    );
}

function Halver(props: doubleHalfProps): JSX.Element {
    return (
        <Button onClick={() => props.setDhValue(0.5 * props.dhValue)}>
            Halve
        </Button>
    );
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
