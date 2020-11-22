import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Login: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography align="center" variant="h4" component="h2">
        Você não está conectado ao sistema. <br></br>
        Para conectar, você deve clicar em "Entrar" e seguir as instruções de acesso.
      </Typography>
    </Container>
  );
};

export default Login;
