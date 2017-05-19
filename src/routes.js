import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import GeneralFormPage from './components/forms/GeneralFormPage';
import ButtonsPage from './components/buttons/ButtonsPage';
import FormButtonsPage from './components/forms/FormButtonsPage';
import GeneralElementsPage from './components/ui-elements/GeneralElementsPage';
import IconsPage from './components/ui-elements/IconsPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="buttons" component={ButtonsPage}/>
    <Route path="forms/general-form" component={GeneralFormPage}/>
    <Route path="forms/form-buttons" component={FormButtonsPage}/>
    <Route path="ui-elements/general-elements" component={GeneralElementsPage}/>
    <Route path="ui-elements/icons" component={IconsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
