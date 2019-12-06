import React from "react";
import { Container, Card, CardHeader, CardContent, TextField, Button, Box } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Card>
        <CardHeader title="Login" />
        <CardContent>
          <form>
            <TextField id="email" label="Email" required fullWidth />
            <TextField id="password" label="Password" required type="password" fullWidth />
            <Box css={{ marginTop: 16 }}>
              <Button fullWidth color="primary" type="submit">
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
