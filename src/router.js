import { Router, Route, Switch } from 'dva/router';
import React from 'react';
import Index from './pages/index/index';
import Knowus from './pages/knowus/knowus';
import Meichen from './pages/meichen/meichen';
import Active from './pages/active/active';
import Adv from './pages/adv/adv';
import Interact from './pages/interact/interact';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/knowus" exact component={Knowus} />
            <Route path="/meichen" exact component={Meichen} />
            <Route path="/active" exact component={Active} />
            <Route path="/adv" exact component={Adv} />
            <Route path="/interact" exact component={Interact} />
        </Switch>
    </Router>
  );
}

export default RouterConfig;
