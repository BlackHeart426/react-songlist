import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import CsvParse from "@vtex/react-csv-parse";
import UploadButtonsCustom from "../../../companents/inputComponent/uploadButton/uploadButtonCustom";

export default function StepReview(props){

    const [rows, setRows] = React.useState([])
    const [nameFile, setNameFile] = useState('');
    const {onData} = props;

    const keys = [
        "title",
        "artist",
        "active"
    ];

    const handleData = data => {
        setRows(data)
        onData(data)
        console.log(data)
    };

    return (
        <>
            <div style={{"marginBottom": "10px"}}>
                <CsvParse
                    keys={keys}
                    onDataUploaded={handleData}
                    // render={onChange => <input type="file" onChange={onChange} />}
                    render={onChange => <UploadButtonsCustom type="file"  onChange={(event) => onChange(event)} name={"CSV File"}/>}
                />


            </div>
            <Typography>
                Required columns: "title", "artist". Optional columns: "comment", "active", "tabs", "lyrics", "chords", "capo"
            </Typography>
        </>
    )
}