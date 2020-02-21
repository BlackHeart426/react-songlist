import React from "react";
import Button from "react-bootstrap/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";


export const Songs = () => {
    let pt0 = {
        padding: 0
    }
    let noneBorderBottom = {
        borderBottom: 0
    }
    let noneBottomMargin = {
        marginBottom: 0
    }
    return (
        <div className={{top:'40px'}}>
            <form>
                <h1>Songs</h1>
                <div className="card">
                    <div className="card-header" style={noneBorderBottom}>
                        <Link to="/">
                            <IconButton
                                aria-label="show more"

                                aria-haspopup="true"

                                color="inherit"
                            >
                                <AddCircleOutlineIcon/>
                            </IconButton>
                        </Link>
                        <Button className="btn-light" ><i className="fas fa-plus-circle"></i></Button>
                        <Button className="btn-light" ><i className="fas fa-edit"></i></Button>
                        <Button className="btn-light" ><i className="fas fa-trash"></i></Button>
                        <Button className="btn-light" ><i className="fas fa-question-circle"></i></Button>
                        <Button className="btn-light" ><i className="fas fa-list"></i></Button>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={pt0}>
                        <table className="table table-striped" style={noneBottomMargin}>
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



            </form>
        </div>
    )
}