import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";
import * as shortid from "shortid";
import {useDispatch} from "react-redux";
import {addAttributesActionCreator} from "../../../../store/action/modules/attributes";
import {DialogAttributesAdd} from "../../../../companents/Dialog/DialogAttributes/DialogAttributesAdd";

export const AddAttribute = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);

    const {lenSelected, loading} = props;
    const dispatch = useDispatch()

    const openDialog = () => {
        setDialogOpened(true)
    };

    function showButton(lenSelected) {
        return lenSelected == 0 ? false : true
    }

    const addAttribute = (property) => {
        debugger
        console.log('property', property)
        const {name, image, active, showInTable, priority, ofSongs} = property;
        const newAttribute = {
            id: shortid.generate(),
            data: {
                name: name,
                image: image,
                active: active,
                showInTable: showInTable,
                priority: priority,
                ofSongs: 0
            }
        };
        dispatch(addAttributesActionCreator(newAttribute))
    };

    return (
        <>
            <IconButton onClick={ openDialog } disabled={ loading === true ? true : showButton(lenSelected) }>
                <ControlPointIcon />
            </IconButton>
            <DialogAttributesAdd onAddAttribute={ addAttribute } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
};