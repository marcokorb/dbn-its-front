import React, { useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { login } from '../../store/ducks/user/actions';

import { useStyles } from './styles';

type DispatchProps = {
  login(name: string): void;
}

type Props = DispatchProps;

const Login: React.FC<Props> = ({ login }: Props) => {

  const history = useHistory();
  const [name, setName] = useState('');

  const classes = useStyles();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(name);
    history.push('/');
  }

  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="column"
              spacing={3}
              justify="center"
              alignItems="center"
            >
              <Typography
                variant="h5"
                component="h2"
              >
                Informe o nome do Usuário
              </Typography>
              <form autoComplete="off" onSubmit={onSubmit}>
                <Grid
                container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <TextField
                    required
                    id="name"
                    label="Nome"
                    variant="outlined"
                    onChange={onChange}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disableElevation
                  >
                    Disable elevation
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({ login }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
