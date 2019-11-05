import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import MainLayout from 'containers/MainLayout';
import CollectionPage from 'containers/CollectionPage';
import SearchPage from 'containers/SearchPage';
import VideoPage from 'containers/VideoPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/nasa-search'>
          <MainLayout>
            <SearchPage />
          </MainLayout>
        </Route>
        <Route path='/video/:id'>
          <VideoPage />
        </Route>
        <Route path='/'>
          <MainLayout>
            <CollectionPage />
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
