import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class SecondStep extends React.Component {


    render() {
       return (<div>

            <div className="container-fluid">
                <div className="col-md-4 col-md-push-4">

                    <div className="form-group">
                        <label htmlFor="dateOfBirth">date Of Birth</label>
                        <input type="date" name="dateOfBirth" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">gender</label>
                        <select name="age" className="form-control">
                            <option value="male">male</option>
                            <option value="femal">female</option>
                        </select>
                    </div>

                    <Link to={`/FinalStep/`}  className="btn btn-primary btn-block">Next</Link>

                </div>
            </div>
        </div>
        );

    }
}
export default SecondStep;