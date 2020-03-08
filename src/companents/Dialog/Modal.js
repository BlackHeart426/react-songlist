import React, { useRef, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Context = React.createContext();

export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [context, setContext] = useState();

    // make sure re-render is triggered after initial
    // render so that modalRef exists
    useEffect(() => {
        setContext(modalRef.current);
    }, []);

    return (
        <>
            <Context.Provider value={context}>{children}</Context.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function Modal({ onClose, children, ...props }) {
    const modalNode = useContext(Context);

    return modalNode
        ? ReactDOM.createPortal(
            <Overlay>
                <Dialog {...props}>
                    {children}
                    <button onClick={onClose}>Close</button>
                </Dialog>
            </Overlay>,
            modalNode
        )
        : null;
}

