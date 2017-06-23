import React from 'react';
import i18n from 'meteor/universe:i18n';

import { BrowserRouter as Router } from 'react-router-dom';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';

i18n.setLocale('en');

export const renderRoutes = () => (
  <Router>
    <AppContainer />
  </Router>
);
