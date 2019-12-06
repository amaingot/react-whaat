# Basic Login Example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It will be used to demonstrate how to use React.

## Tutorial
> How to create this app from scratch.

 1. Initialize the app: `npx create-react-app basic-login --template typescript`
 2. In a seperate terminal tab start the new app: `yarn start`
 3. Add [Material UI](https://material-ui.com/): `yarn add @material-ui/core`
 4. In the `index.tsx` file, remove the reference to `index.css`. Also delete the following files:
    1. `index.css`
    2. `App.css`
    3. `logo.svg`
 5. In the `App.tsx` file, replace the contents of the file with:
```
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
```
 6. Lets add a few hooks here now. Add the following lines inside the component function:
```
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
```
 7. Connect the text fields to use the new values in state. Update the props `value` and `onChange` to use the hooks:
```
<TextField id="email" label="Email" required fullWidth value={email} onChange={e => setEmail(e.target.value)} />
<TextField id="password" label="Password" required type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
```
 8. Add an `onClick` handler for the login button:
```
  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    console.log({email, password})
  };
```
 9. Connect the login handler to a login endpoint by adding Axios as a dependency (run `yarn add axios`) and posting the username and password to the login endpoint:
```
  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("skip_captcha", "true");
    const response = await axios.post(process.env["REACT_APP_LOGIN_ENDPOINT"] || "", data, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
    console.log(response);
  };
```


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
