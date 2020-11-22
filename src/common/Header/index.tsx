import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { ApplicationState } from "../../store/state";
import { logout } from "../../store/ducks/user/actions";
import { getUsername, isLoggedIn } from "../../store/ducks/user/selectors";

import LoginDialog from "../LoginDialog";

import { useStyles } from "./styles";

type DispatchProps = {
  logout(): void;
};

type StateProps = {
  loggedIn: boolean;
  username: string | null;
};

type Props = DispatchProps & StateProps;

const Header: React.FC<Props> = ({ loggedIn, logout, username }: Props) => {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleClose();
    await logout();
    history.push("/login");
  };

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
          ITS Demo
        </Typography>
        {loggedIn ? (
          <div>
            {username}
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </Menu>
          </div>
        ) : (
          <LoginDialog />
        )}
      </Toolbar>
      {/* <Menu/> */}
    </header>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ logout }, dispatch);

const mapStateToProps = (state: ApplicationState) => ({
  loggedIn: isLoggedIn(state),
  username: getUsername(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
