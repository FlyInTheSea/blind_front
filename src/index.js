
import React from 'react';
import {render} from "react-dom"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

//route
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import {ConnectedRouter} from "react-router-redux"


// Containers
import Full from './containers/full/full'
import {Provider} from "react-redux"

// Views
import Login from './containers/pages/login/login'
import Register from './views/pages/Register/'
import Page404 from './views/pages/Page404/'
import Page500 from './views/pages/Page500/'

//store
import store, {history} from "./Init_store"


import {withRouter} from "react-router"
import test from "./test"



const Auth = withRouter(({match}) => {

    if (match.params.token) {
        let token = match.params.token
        token = 'Bearer ' + token
        window.localStorage.setItem("token", token)
        return (<Redirect to={{
            pathname: "/",
        }}/>)
    } else {
        return (<Redirect to={{
            pathname: "/login",
        }}/>)
    }
})


render((
    <Provider store={
        store
    }>
        <div>

            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <div>
                        <Switch>
                            <Route exact path="/test" name="Login Page" component={test}/>
                            <Route exact path="/login" name="Login Page" component={Login}/>
                            <Route exact path="/register" name="Register Page" component={Register}/>
                            <Route exact path="/404" name="Page 404" component={Page404}/>
                            <Route exact path="/500" name="Page 500" component={Page500}/>
                            <Route exact path="/auth/:token" render={
                                () => {
                                    return <Auth/>
                                }
                            }/>
                            <Route path="/" name="Home"
                                   render={
                                       () => {
                                           let token = window.localStorage.getItem("token")
                                           if (!token) {
                                               return (<Redirect to={{
                                                   pathname: "/login",
                                               }}/>)
                                           }
                                           return <Full/>
                                       }
                                   }

                            />


                        </Switch>
                    </div>
                </MuiThemeProvider>
            </ConnectedRouter>
        </div>
    </Provider>
), document.getElementById('root'))



