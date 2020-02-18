import React, { Component } from "react";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";

class Auth extends Component {


    render() {
        return (
            <>
                <p>{this.props.counter}</p>
                <Button onClick={this.props.onAdd} className="nav-dark">asd</Button>
            </>
        )
    }

}

function mapStateToProbs(state) {
    return {
        counter: state.counter
    }

}

function mapDispatchToProbs(dispatch) {
    return {
        onAdd: () => dispatch({type: 'ADD'})
    }

}

export default connect(mapStateToProbs, mapDispatchToProbs)(Auth)