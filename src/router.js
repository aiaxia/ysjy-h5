import { Router, Route, Switch } from 'dva/router';
import React from 'react';
import Index from './pages/index/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={Index} />
            {/* <Route path="/menu" exact component={Menu} /> */}
        </Switch>
    </Router>
  );
}

export default RouterConfig;
