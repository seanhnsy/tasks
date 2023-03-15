import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎉");

    function alphabetically(): void {
        if (holiday === "🎉") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🤡");
        } else if (holiday === "🤡") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🎃");
        } else {
            setHoliday("🎉");
        }
    }

    function numerically(): void {
        if (holiday === "🎉") {
            setHoliday("🤡");
        } else if (holiday === "🤡") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎄");
        } else {
            setHoliday("🎉");
        }
    }

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={alphabetically}>Next in Alphabet</Button>
            <Button onClick={numerically}>Next in Year</Button>
        </div>
    );
}
