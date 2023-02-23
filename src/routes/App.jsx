import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '@containers/Layout';
import NewPassword from '@containers/NewPassword';
import RecoveryPassword from '@containers/RecoveryPassword';
import Home from '@templates/Home';
import NotFound from '@templates/NotFound';
import Login from '@templates/Login';
import EditAccount from '@containers/EditAccount';
import Account from '@containers/Account';
import Checkout from '@templates/Checkout';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';

const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/new-password" component={NewPassword}/>
                        <Route exact path="/recovery-password" component={RecoveryPassword}/>
                        <Route exact path="/edit-account" component={EditAccount}/>
                        <Route exact path="/account" component={Account}/>
                        <Route exact path="/checkout" component={Checkout}/>
                        <Route exact path='*' component={NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;