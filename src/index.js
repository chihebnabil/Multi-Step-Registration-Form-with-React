import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux'
import {
    BrowserRouter as Router,
    Route,
    IndexRoute,
    Link
} from 'react-router-dom'


var FirstComponent = React.createClass({
    render: function () {
        return (<div>

            <div className="container-fluid">
                <div className="col-md-4 col-md-push-4">

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="text" name="age" className="form-control"></input>
                    </div>

                    <button onClick={this.saveAndContinue} className="btn btn-primary btn-block">Next</button>

                </div>
            </div>
        </div>
        );
    }
});



var FinalStepComponent = React.createClass({
    render: function () {
        return (<div>

            <div className="container-fluid">
                <div className="col-md-4 col-md-push-4">

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="text" name="age" className="form-control"></input>
                    </div>

                    <a href="/final" className="btn btn-primary btn-block">Next</a>

                </div>
            </div>
        </div>
        );
    },

    saveAndContinue: function (e) {
        // Get values via this.refs
        var data = {
            name: this.refs.username.getDOMNode().value,
            password: this.refs.age.getDOMNode().value,

        }
    }
});



ReactDOM.render(
    <div>
        <Router >
            <Route path="/" component={FirstComponent} />

        </Router>
    </div>
    ,
    document.getElementById('root')
);


