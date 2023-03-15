import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header style={{ backgroundColor: "blue" }}>
                Sean Hennessey: UD CISC275 with React Hooks and TypeScript.
                Hello World
            </header>
<<<<<<< HEAD
            <h1></h1>
            <Container>
                <Row>
                    <Col>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png"
                            alt="Album cover of Flower Boy by Tyler, The Creator"
                        />
                        <div style={{ backgroundColor: "red" }}>_____</div>
                    </Col>
                    <Col>
                        <ol>
                            <li>911 / Mr. Lonely</li>
                            <li>See You Again</li>
                            <li>Boredom</li>
                        </ol>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div style={{ backgroundColor: "red" }}>_____</div>
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
