import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";

const Menu: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Link color="inherit" to="/questions" className={classes.toolbarLink}>
          Questões
        </Link>

        <Link
          color="inherit"
          to="/users_from_concepts"
          className={classes.toolbarLink}
        >
          Usuários
        </Link>
      </Toolbar>
    </>
  );
};

export default Menu;
