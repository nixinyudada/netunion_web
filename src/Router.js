import React from "react"
import { HashRouter,Route,Switch } from "react-router-dom"
import App from "./App"
import Welcome from "./pages/Welcome"
import DormFix from "./pages/DormFix"
import JoinUs from "./pages/JoinUs"
import Feedback from "./pages/Feedback"

export default class Router extends React.Component{
    render(){
        return (
            <div>
                <HashRouter>
                    <App>
                        <Switch>
                        <Route path="/welcome" component={Welcome}></Route>
                        <Route path="/dormFix" component={DormFix}></Route>
                        <Route path="/joinUs" component={JoinUs}></Route>
                        <Route path="/feedback" component={Feedback}></Route>
                        </Switch>
                    </App>
                </HashRouter>
            </div>
        );
    }
}