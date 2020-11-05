import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage';
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'


const Main = () =>
    (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Projects" component={Projects} />



        </Switch>
    )


export default Main;