import React, {useEffect, useRef, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from "@material-ui/core/Container";

const Context = React.createContext();

export function DialogProvider({ children }) {
    const dialogRef = useRef();
    const [context, setContext] = useState();

    // make sure re-render is triggered after initial
    // render so that dialogRef exists
    useEffect(() => {
        setContext(dialogRef.current);
    }, []);

    return (
        <Container>
            <Context.Provider value={context}>{children}</Context.Provider>
            <div ref={dialogRef} />
        </Container>
    );
}

export function CustomDialog({ onClose, children, ...props }) {
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

export default function CustomDialog(props) {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {show, onHide, data} = props

    useEffect(() => {
        setDialogOpened(show)
    },[show])

    const handleClose = () => {
        setDialogOpened(false);
        onHide()
    };

    const handleAccept = () => {
        handleClose()
    }

    return (
        <Dialog
            open={dialogOpened}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"><strong>{data.title}</strong></DialogTitle>
            <DialogContent>
                    {data.content}
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleClose} color="primary" autoFocus>
                    CANCEL
                </Button>
            </DialogActions>
        </Dialog>
    );
}
