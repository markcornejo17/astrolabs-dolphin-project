import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

function App () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={MainScreen} />
                <Route path="/login" exact={true} component={LoginScreen} />
                <Route path="/signup" exact={true} component={SignupScreen} />
            </Switch>
        </BrowserRouter>
    ) 
}


export default App;