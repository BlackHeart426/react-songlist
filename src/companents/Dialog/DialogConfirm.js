import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DialogConfirm(props) {
    const [confirmOpened, setConfirmOpened] = React.useState(false);
    const {show, onHide, onAccept, data} = props

    useEffect(() => {
        setConfirmOpened(show)
    },[show])

    const handleClose = () => {
        setConfirmOpened(false);
        onHide()
    };

    const handlerAccept = () => {
        handleClose()
        onAccept(true)
    }

    return (
        <Dialog
            open={confirmOpened}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"><strong>{data.title}</strong></DialogTitle>
            <DialogContent>
                    {data.content}
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleClose} color="primary">
                    Disagree
                </Button>
                <Button variant="outlined" onClick={handlerAccept} color="secondary" autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
}
