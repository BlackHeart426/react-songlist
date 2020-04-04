import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import CustomDialog from "../CustomDialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#3f51b5',
            color: '#fff'
        },

    }),
);

export function DialogLogin(props) {

    const classes = useStyles();
    const {show, onHide, onLogin} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dialogOpened, setDialogOpened] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (username.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [username, password]);

    useEffect(() => {
       setDialogOpened(show)
    }, [show]);

    const handleLogin = () => {
        const dataUser = {
            username,
            password
        }
        onLogin(dataUser)
        // if (username === 'abc@email.com' && password === 'password') {
        //     //Запрос в БД
        //     setError(false);
        //     setHelperText('Login Successfully');
        // } else {
        //     setError(true);
        //     setHelperText('Incorrect username or password')
        // }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || handleLogin();
        }
    };

    const handleClose = (e) => {
        onHide()
        setDialogOpened(false)
    };

    return (
        <React.Fragment>
            <Dialog
                open={dialogOpened}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                    <Card className={classes.card}>
                        <CardHeader className={classes.header} title="Login" />
                        <CardContent>
                            <div>
                                <TextField
                                    error={error}
                                    fullWidth
                                    id="username"
                                    type="email"
                                    label="Username"
                                    placeholder="Username"
                                    margin="normal"
                                    onChange={(e)=>setUsername(e.target.value)}
                                    onKeyPress={(e)=>handleKeyPress(e)}
                                />
                                <TextField
                                    error={error}
                                    fullWidth
                                    id="password"
                                    type="password"
                                    label="Password"
                                    placeholder="Password"
                                    margin="normal"
                                    helperText={helperText}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    onKeyPress={(e)=>handleKeyPress(e)}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                className={classes.loginBtn}
                                onClick={handleLogin}
                                disabled={isButtonDisabled}>
                                Login
                            </Button>
                        </CardActions>
                        <CardActions>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
            </Dialog>
        </React.Fragment>
    );

}