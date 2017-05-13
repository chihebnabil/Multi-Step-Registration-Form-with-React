import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


import { createStore } from 'redux'





import FirstStep from "./components/FirstStep"
import SecondStep from "./components/SecondStep"
import FinalStep from "./components/FinalStep"



const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            state = state + action.payload
            console.log(state)
            break;
        case 'SUB':
            state = state - action.payload
            break;
    }
    return state;
}


// redux create a store
const store = createStore(reducer, fieldValues)



ReactDOM.render((
    <Router history={history}>
        <div>
        <Route exact   path="/" component={FirstStep} ></Route>
        
        <Route path="/SecondStep" component={SecondStep}/>


        <Route path="/FinalStep" component={FinalStep}/>
</div>
    </Router>
),
    document.getElementById('root')
);






var fieldValues = {
    username: null,
    age: null,
    dateOfBirth: null,
    gender: 'male' | 'female'
}

