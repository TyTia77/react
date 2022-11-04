// import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, PageTwo } from './pages';
import { Layout } from './libs';

// const page_list = [
//   {
//     label: 'home',
//     component: HomePage,
//     path: '/',
//   },
//   {
//     label: 'page 2',
//     component: PageTwo,
//     path: '/page2',
//   },
// ]

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/page2" exact component={PageTwo} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;