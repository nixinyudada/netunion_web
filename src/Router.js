import React from "react"
import { HashRouter,Route,Switch } from "react-router-dom"
import App from "./App"
import Welcome from "./pages/Welcome"
import DormFix from "./pages/DormFix"
import JoinUs from "./pages/JoinUs"
import Feedback from "./pages/Feedback"

import Container from "./Container"

import Admin from "./components/Admin"
import Login from "./components/Login"

// admin components

import DormFixList from "./components/AdminComponents/DormFixList"
import JoinUsList from "./components/AdminComponents/JoinUsList"
import FeedbackList from "./components/AdminComponents/FeedbackList"


export default class Router extends React.Component{
    render(){
        return (
            <div>
                <HashRouter>
               <Container>
               <Switch>
               <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=><Admin>
                        <Switch>
                                <Route path="/admin/welcome" component={Welcome}></Route>
                                <Route path="/admin/dormFixList" component={DormFixList}></Route>
                                <Route path="/admin/joinUsList" component={JoinUsList}></Route>
                                <Route path="/admin/feedbackList" component={FeedbackList}></Route>
                            </Switch>
                    </Admin>}></Route>
                    <Route path="/index" render={()=>
                        <App>
                            <Switch>
                                <Route path="/index/welcome" component={Welcome}></Route>
                                <Route path="/index/dormFix" component={DormFix}></Route>
                                <Route path="/index/joinUs" component={JoinUs}></Route>
                                <Route path="/index/feedback" component={Feedback}></Route>
                            </Switch>
                        </App>
                    }>
                    </Route>
                </Switch>
               </Container>
               </HashRouter>
            </div>
        );
    }
}