import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CustomDialog from "../CustomDialog";

export default function DialogAttributesRemove(props) {
    const [dialogOpened, setDialogOpened] = useState(false);
    const { show, onHide, onAccept } = props;
    const copyDataAttributes = {...props.dataSong};
    const copyDataAttributesData = {...copyDataAttributes['data']};

    useEffect(() => {
        setDialogOpened(show)
    },[show]);

    const handleClose = () => {
        setDialogOpened(false);
        onHide()
    };

    const handleAccept = () => {
        handleClose();
        onAccept(true)
    }

    const data = {
        title: 'Are you sure you want to delete these song?',
        content: <div><p>Name: <strong>{copyDataAttributesData.name}</strong></p></div>,
        action:  <>
            <Button variant="outlined" onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button variant="outlined" onClick={handleAccept} color="secondary" autoFocus>
                Agree
            </Button>
            </>
    };

    return (
        <CustomDialog  data = { data } show={ dialogOpened }  onHide={ onHide }/>
    );
}
