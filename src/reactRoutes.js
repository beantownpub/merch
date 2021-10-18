import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { AboutInfo } from './components/content/about'
import { ContactInfo } from './components/content/contact'
import { MainInfo } from './components/content/main'
import { PrivateParties } from './components/content/parties'
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
                <Route path="/merch/items">
                    <Merch />
                </Route>
                <Route path="/parties">
                    <PrivateParties />
                </Route>
            </Switch>
        </Router>
    )
}
