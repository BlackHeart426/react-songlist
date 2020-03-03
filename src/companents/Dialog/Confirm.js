import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Confirm(props) {
    const [confirmOpened, setConfirmOpened] = React.useState(false);
    const {show, onHide} = props

    useEffect(() => {
        setConfirmOpened(show)
    },[show])

    const handleClose = () => {
        setConfirmOpened(false);
        onHide()
    };

    return (
        <Dialog
            open={confirmOpened}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete these song?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Title:
                    Artist:
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={handleClose} color="secondary" autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
}
