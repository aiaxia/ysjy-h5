import { Router, Route, Switch } from 'dva/router';
import React from 'react';
import Index from './pages/index/index';
import Knowus from './pages/knowus/knowus';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/knowus" exact component={Knowus} />
        </Switch>
    </Router>
  );
}

export default RouterConfig;
