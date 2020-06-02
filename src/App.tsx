import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import store from './store';
import AppRouter from './router/AppRouter';
import Header from './common/Header';


const App: React.FC = () => {

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header />
        <AppRouter  />
      </Container>
    </>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};
