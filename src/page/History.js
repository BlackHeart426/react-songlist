import React from "react";
import Button from "react-bootstrap/Button";


export const HistoryQueue = () => {

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
        <>
            <form>
                <h1>Songs</h1>
                <div className="card">
                    <div className="card-header" style={noneBorderBottom}>
                        <Button className="btn-light" ><i className="fas fa-edit"></i></Button>
                        <Button className="btn-light" ><i className="fas fa-trash"></i></Button>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary">All</button>
                            <button type="button" className="btn btn-secondary">Stream</button>
                            <button type="button" className="btn btn-secondary">Day</button>
                            <button type="button" className="btn btn-secondary">Week</button>
                            <button type="button" className="btn btn-secondary">Month</button>
                        </div>

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


        </>

    )
}