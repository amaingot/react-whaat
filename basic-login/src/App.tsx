import React from "react";
import axios from "axios";
import { Container, Card, CardHeader, CardContent, TextField, Button, Box } from "@material-ui/core";

const App: React.FC = () => {
  const [email, setEmail] = React.useState(process.env["REACT_APP_DEFAULT_EMAIL"] || "");
  const [password, setPassword] = React.useState(process.env["REACT_APP_DEFAULT_PASSWORD"] || "");

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("skip_captcha", "true");
    const response = await axios.post(process.env["REACT_APP_LOGIN_ENDPOINT"] || "", data, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    console.log(response);
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
