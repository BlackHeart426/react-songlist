import React, {useEffect, useState} from "react";

const initialState = {
    email: '',
    password: ''
}

export function LoginForTest(props) {

    const {show, onLogin} = props;
    const [state, setState] = useState(initialState)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dialogOpened, setDialogOpened] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13 || e.which === 13) {
            isButtonDisabled || handleLogin();
        }
    };

    return (
        <React.Fragment>

            <div className="card" style="width: 18rem;">
                <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    aria-label="email"
                    value={state.email}
                    onChange={(e)=>setState({...state, email:e.target.value})}
                    onKeyPress={(e)=>handleKeyPress(e)}
                    aria-describedby="basic-addon1"/>
                <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    aria-label="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    onKeyPress={(e)=>handleKeyPress(e)}
                    aria-describedby="basic-addon1"/>
                <button type="button" className="btn btn-dark" onClick={handleLogin}>Login</button>
            </div>
        </React.Fragment>
    );

}