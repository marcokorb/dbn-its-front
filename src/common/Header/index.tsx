import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Menu from '../Menu';

import { useStyles } from './styles';

const Header: React.FC = () =>  {

  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          className={classes.toolbarTitle}
        >
          Analytics
        </Typography>       
      </Toolbar>
      <Menu/>
    </header>
  );
}

export default Header;
