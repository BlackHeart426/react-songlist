import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CustomDialog from "../CustomDialog";

export default function DialogSongRemove(props) {
    const [dialogOpened, setDialogOpened] = useState(false);
    const { show, onHide, onAccept} = props
    const copyDataSong = {...props.dataSong};
    const copyDataSongData = {...copyDataSong['data']};

    useEffect(() => {
        setDialogOpened(show)
    },[show])

    const handleClose = () => {
        setDialogOpened(false);
        onHide()
    };

    const handleAccept = () => {
        handleClose()
        onAccept(true)
    }

    const data = {
        title: 'Вы действительно хотите удалить услугу',
        content: <div><p>Наименование: <strong>{copyDataSongData.title}</strong></p></div>,
        action:  <>
            <Button variant="outlined" onClick={handleClose} color="primary">
                Отменить
            </Button>
            <Button variant="outlined" onClick={handleAccept} color="secondary" autoFocus>
                Согласен
            </Button>
            </>
    }

    return (
        <CustomDialog  data = { data } show={ dialogOpened }  onHide={ onHide }/>
    );
}
