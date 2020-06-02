import React from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Courses from '../pages/Courses';
import Questions from '../pages/Questions';
import Users from '../pages/Users';

const LoggedInRouter = () => {

  return (
    <>      
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/cursos" />} />
        <Route path={`/cursos`} component={Courses}/>
        <Route path={`/questions/:courseId`} component={Questions}/>
        <Route path={`/users`} component={Users}/>
      </Switch>
    </>
  );
}

export default LoggedInRouter;
