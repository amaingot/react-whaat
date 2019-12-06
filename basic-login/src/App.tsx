import React from "react";
import { Container, Card, CardHeader, CardContent, TextField, Button, Box } from "@material-ui/core";

const App: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    console.log({email, password})
  };

  return (
    <Container maxWidth="xs">
      <Card>
        <CardHeader title="Login" />
        <CardContent>
          <form>
            <TextField id="email" label="Email" required fullWidth value={email} onChange={e => setEmail(e.target.value)} />
            <TextField id="password" label="Password" required type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
            <Box css={{ marginTop: 16 }}>
              <Button fullWidth color="primary" type="submit" onClick={handleLogin}>
                Login
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default App;
