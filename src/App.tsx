import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header style={{ backgroundColor: "orangered" }}>
                Sean Hennessey: UD CISC275 with React Hooks and TypeScript.
                Hello World
            </header>
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
        </div>
    );
}

export default App;
