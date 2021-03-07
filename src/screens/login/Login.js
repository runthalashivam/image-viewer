import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Header from '../../common/header/Header';
import './Login.css'

const styles = {
  card: {
    padding: '15px',
    position: 'relative',
    top: '20px',
    left: '50%',
    width: '325px',
    transform: 'translateX(-50%)',
  },
  title: {
    fontSize: 20
  }
};

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      usernameRequired: "display-none",
      password: "",
      passwordRequired: "display-none",
      incorrectUsernamePassword: "display-none",
      loggedIn: sessionStorage.getItem('access-token') == null ? false : true
    };
  }

  loginClickHandler = () => {
    this.setState({ incorrectUsernamePassword: "display-none" });
    this.state.username === "" ? this.setState({ usernameRequired: "display-block" }) : this.setState({ usernameRequired: "display-none" });
    this.state.password === "" ? this.setState({ passwordRequired: "display-block" }) : this.setState({ passwordRequired: "display-none" });

    if (this.state.username === "" || this.state.password === "") { return }

    if (this.state.username === "test_user" && this.state.password === "test_user") {
      sessionStorage.setItem('access-token', 'IGQVJYd3RvT1laRU92enAweFZAqbU5EYzNXRHVPbFFQenBTQWlKNlJvczhJdGhhVWRMbTZASY1I1d1pPNEh4QVBpd0lwekE3NTJjVzVDZAXd4QmtjRlJ3dWVWbDE1cFRQdVpueUd3UzBRdU0zNWRPSzhDN0xNMVRLM0kyNnpR');
      this.setState({ loggedIn: true });
    } else {
      this.setState({ incorrectUsernamePassword: "display-block" });
    }
  }

  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value })
  }

  inputPasswordChangeHandler = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div>
        <Header />
        <Card style={styles.card}>
          <CardContent>
            <Typography style={styles.title}> LOGIN </Typography><br />
            <FormControl required style={{ width: '100%' }}>
              <InputLabel htmlFor="username"> Username </InputLabel>
              <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
              <FormHelperText className={this.state.usernameRequired}><span className="red-color">required</span></FormHelperText>
            </FormControl><br /><br />
            <FormControl required style={{ width: '100%' }}>
              <InputLabel htmlFor="password"> Password </InputLabel>
              <Input id="password" type="password" onChange={this.inputPasswordChangeHandler} />
              <FormHelperText className={this.state.passwordRequired}><span className="red-color">required</span></FormHelperText>
            </FormControl><br /><br />
            <div className={this.state.incorrectUsernamePassword}><span className="red-color"> Incorrect username and/or password </span></div><br />
            <Button variant="contained" color="primary" onClick={this.loginClickHandler}> LOGIN </Button>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default Login;