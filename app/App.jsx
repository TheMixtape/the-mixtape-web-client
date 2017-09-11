import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import store from './store/store';
import HomePage from './containers/HomePage';
import NotFound from './NotFound';

const App = () => (
  <Router>
    <Provider store={store} >
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <Switch>
          <Route exact path="/react" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Provider>
  </Router>
);

export default App;
