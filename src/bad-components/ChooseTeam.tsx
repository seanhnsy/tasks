import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

interface chooseTeamProps {
    team: string[];
    setTeam: (team: string[]) => void;
}

function chooseMember(props: chooseTeamProps, newMember: string) {
    if (!props.team.includes(newMember)) {
        const newTeam = [...props.team, newMember];
        props.setTeam(newTeam);
    }
}

function clearTeam(props: chooseTeamProps) {
    const newTeam: string[] = [];
    props.setTeam(newTeam);
}

export function ChooseTeam(): JSX.Element {
    const [team, setTeam] = useState<string[]>([]);

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() =>
                                    chooseMember(
                                        {
                                            team,
                                            setTeam
                                        },
                                        option
                                    )
                                }
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={() => clearTeam({ team, setTeam })}>
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
