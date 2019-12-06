import React from "react";
import axios from "axios";
import { Container, Card, CardHeader, CardContent, TextField, Button, Box } from "@material-ui/core";
import { useDispatch } from "./store";

const App: React.FC = () => {
  const [email, setEmail] = React.useState(process.env["REACT_APP_DEFAULT_EMAIL"] || "");
  const [password, setPassword] = React.useState(process.env["REACT_APP_DEFAULT_PASSWORD"] || "");
  const dispatch = useDispatch();

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    dispatch({
      type: "LOGIN_START",
      payload: {
        email,
        password
      }
    });

    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("skip_captcha", "true");

    axios
      .post(process.env["REACT_APP_LOGIN_ENDPOINT"] || "", data, { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
      .then(r => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            jwt: r.data["jwt"] || "",
            token: r.data["token"] || ""
          }
        });
      })
      .catch(_e => {
        console.log(_e);
        dispatch({
          type: "LOGIN_FAIL",
          payload: {
            error: "uh oh"
          }
        });
      });
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
