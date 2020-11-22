import React, { useState } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { login } from "../../store/ducks/user/actions";

type DispatchProps = {
  login(name: string): void;
};

type Props = DispatchProps;

const LoginDialog: React.FC<Props> = ({ login }: Props) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = async () => {
    await login(name);
    await history.push("/cursos");
    // handleClose();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Entrar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">ITS Demo - Entrar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para entrar no ITS Demo, você deve escolher um nome de acesso. O
            nome de acesso escolhido irá armazenar o desempenho dentro do
            sistema e será utilizado para acessos futuros.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            onChange={handleNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button onClick={handleLogin} color="primary">
            Entrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ login }, dispatch);

export default connect(null, mapDispatchToProps)(LoginDialog);
