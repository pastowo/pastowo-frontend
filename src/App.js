import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Posts from './containters/Posts/Posts';
import PostPage from './components/Posts/PostPage/PostPage';

function App() {
  return (
    <div>
    <Layout>
      <Switch>
        <Route path='/' component={Posts} />
      </Switch>
    </Layout>
    </div>
  );
}

export default App;
