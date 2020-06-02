import React from 'react';
import { connect } from 'react-redux';
import { Route, RouteProps, Redirect, } from 'react-router-dom';

import { ApplicationState } from '../store/state';
import { isLoggedIn } from '../store/ducks/user/selectors';

type StateProps = {
  loggedIn?: boolean;
};

type Props = RouteProps & StateProps;


// See https://reacttraining.com/react-router/web/example/auth-workflow
const PrivateRoute: React.FC<Props> = ({ component: Component, loggedIn, ...rest }: Props) => {
  
  if (!Component) {
    return <Route {...rest} />
  }

  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = (state: ApplicationState) => ({ 
  loggedIn: isLoggedIn(state)
});

export default connect(mapStateToProps, null)(PrivateRoute);
