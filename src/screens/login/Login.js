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
    top: '90px',
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
      sessionStorage.setItem('username','test_user');
      sessionStorage.setItem('access-token', 'IGQVJWVDdGZAUNyNVhmUWxIaTRCck94c0Jkc1BvTjhIYWJjQzdTSFNyTnhrODQ2WWpQVU9odlBmWHlxeUNjcWdPMDJuTHZAfUEtiTExCbmZASLUo4U1dHT0xJdF80MHE2UnN4NmEzSENkS3NIeURYdTk0blpKV3NaY2VYd253');
      this.setState({ loggedIn: true });
      this.navigateToHome();
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

  navigateToHome = () => {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="main-container">
        <Header screen={"Login"} />
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