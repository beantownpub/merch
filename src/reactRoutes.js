import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { MainInfo, AboutInfo, ContactInfo, PrivateParties } from './components/content/main'
import { FoodMenu } from './components/foodMenus/main'
import Merch from './components/merch/merch'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainInfo />
                </Route>
                <Route path="/about">
                    <AboutInfo />
                </Route>
                <Route path="/contact">
                    <ContactInfo />
                </Route>
                <Route path="/index">
                    <MainInfo />
                </Route>
                <Route path="/menu">
                    <FoodMenu />
                </Route>
                <Route path="/merch">
                    <Merch />
                </Route>
                <Route path="/parties">
                    <PrivateParties />
                </Route>
            </Switch>
        </Router>
    )
}
