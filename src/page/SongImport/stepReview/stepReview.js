import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function StepReview(){

    return (
        <>
            <div style={{"marginBottom": "10px"}}>
                <FormControl disabled>
                    <InputLabel htmlFor="component-disabled">Name</InputLabel>
                    <Input id="component-disabled" value={''} />
                </FormControl>

                <Button
                    style={{"marginTop":"10px"}}
                    variant="outlined"
                    color="primary"
                    // onClick={handleBack}
                    // className={classes.button}
                >
                    CSV File
                </Button>

            </div>
            <Typography>
                Required columns: "title", "artist". Optional columns: "comment", "active", "tabs", "lyrics", "chords", "capo"
            </Typography>
        </>
    )
}