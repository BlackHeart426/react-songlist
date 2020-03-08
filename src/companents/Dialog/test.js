import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ModalProvider, Modal } from "./Modal";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleGo = () => console.log('Go')

    const handleDown = () => console.log('Down')

    return (
        <ModalProvider>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    console.log("parent form submit");
                }}
            >
                <h1>My App</h1>
                <button type="button" onClick={() => setIsModalOpen(true)}>
                    Open app modal
                </button>
                {isModalOpen && (
                    <Modal onClose={() => setIsModalOpen(false)}>
                        <form
                            onSubmit={event => {
                                event.preventDefault();
                                console.log("modal submit");
                            }}
                        >
                            <p>Create</p>
                            <TextField
                                margin="dense"
                                id="Title"
                                label="Title"
                                type="text"

                                fullWidth
                                onChange={handleGo}
                            />

                            <button type="submit" onClick={handleGo}>Go</button>
                            <button type="submit" onClick={handleDown}>Down</button>
                        </form>
                    </Modal>
                )}
            </form>
        </ModalProvider>
    );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
