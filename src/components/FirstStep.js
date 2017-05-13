import React from 'react';
import MainContainer from "../MainContainer"

import {

    Route,
    Link
} from 'react-router-dom';
class FirstStep extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            username: '',
            age: ''
        }

        this.onChange = this.onChange.bind(this);

    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (<div>

            <div className="container-fluid">
                <div className="col-md-4 col-md-push-4">
                    <MainContainer></MainContainer>
                    <div className="form-group">
                        <label htmlFor="username">username</label>
                        <input type="text" name="username" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">age</label>
                        <input type="text" name="age" className="form-control"></input>

                    </div>
                    <Link to={`/SecondStep/`} className="btn btn-primary btn-block">Next</Link>



                </div>
            </div>
        </div>
        );

    }
}
export default FirstStep;