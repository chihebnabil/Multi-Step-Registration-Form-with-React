import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class FinalStep extends React.Component {


    render() {
        return (<div>

            <div className="container-fluid">
                <div className="col-md-4 col-md-push-4">
                    <div className="row">
                        <div className="col-md-6">Username</div>
                        <div className="col-md-6">Age</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">Birthday</div>
                        <div className="col-md-6">gender</div>
                    </div>
                    <button onClick={this.submitData} className="btn btn-primary btn-block">Submit</button>
                    <Link to={`/`}  className="btn btn-primary btn-block">Previous</Link>

                </div>
            </div>
        </div>
        );

    }
}
export default FinalStep;