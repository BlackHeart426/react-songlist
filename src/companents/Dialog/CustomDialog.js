import React, {useContext, useEffect, useRef, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from "@material-ui/core/Container";

export default function CustomDialog(props) {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {show, onHide, data} = props

    useEffect(() => {
        setDialogOpened(show)
    },[show])

    const handlerClose = () => {
        setDialogOpened(false);
        onHide()
    };

    return (
        <Dialog
            open={dialogOpened}
            onClose={handlerClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"><strong>{data.title}</strong></DialogTitle>
            <DialogContent>
                    {data.content}
            </DialogContent>
            <DialogActions >
                {data.action}
            </DialogActions>
        </Dialog>
    );
}
