import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import user from "./user"
import FirstStep from "./components/FirstStep"
import SecondStep from "./components/SecondStep"
import FinalStep from "./components/FinalStep"





// redux create a store
const store = createStore(user)
console.log(store)


ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={FirstStep} ></Route>

                <Route path="/SecondStep" component={SecondStep} />


                <Route path="/FinalStep" component={FinalStep} />
            </div>
        </Router>
    </Provider>
),
    document.getElementById('root')
);






