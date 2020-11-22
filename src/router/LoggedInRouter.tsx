import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Courses from "../pages/Courses";
import Questions from "../pages/Questions";
import Users from "../pages/Users";

const LoggedInRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/cursos" />} />
        <Route path={`/cursos`}>
          <Courses />
        </Route>
        <Route path={`/questions/:courseId`}>
          <Questions />
        </Route>
        <Route path={`/users`}>
          <Users />
        </Route>
      </Switch>
    </>
  );
};

export default LoggedInRouter;
