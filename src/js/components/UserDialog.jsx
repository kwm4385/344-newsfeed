import { Dialog, FlatButton, Tabs, Tab, TextField } from 'material-ui'
import React  from 'react'
import UserActions  from '../actions/UserActions.js'

export default React.createClass({
  getInitialState() {
    return {
      open: this.props.open,
      tab: 0,
      username: '',
      password: '',
      createUsername: '',
      createPassword: '',
      createPasswordConfirm: ''
    };
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.props != prevProps) {
      this.setState({
        open: this.props.open
      });
    }
  },

  handleClose() {
    this.setState({
      open: false,
      tab: 0,
      username: '',
      password: '',
      createUsername: '',
      createPassword: '',
      createPasswordConfirm: ''
    });
  },

  handleSubmit() {
    if (this.state.tab == 0) {
      UserActions.login(this.state.username, this.state.password);
    } else {
      UserActions.create(this.state.createUsername, this.state.createPassword);
    }
  },

  handleTabChange(t) {
    if (t == 0 || t == 1) {
      this.setState({
        tab: t
      });
    }
  },

  hanldeFieldChange(e) {
    let s = {};
    s[$(e.target).attr('name')] = $(e.target).val();
    this.setState(s);
  },

  isValid() {
    if (this.state.tab == 0) {
      return this.state.username.length > 0 && this.state.password.length > 0;
    } else {
      return this.state.createUsername.length > 0
          && this.state.createPassword.length > 0
          && this.state.createPasswordConfirm == this.state.createPassword;
    }
  },

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />
    ];

    if (this.isValid()) {
      actions.push(
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleSubmit}
        />
      );
    } else {
      actions.push(
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleSubmit}
          disabled
        />
      );
    }

    return (
      <Dialog
          className="user-model"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Tabs value={this.state.tab} onChange={this.handleTabChange}>
            <Tab label="Sign In" value={0}>
              <div className="tab-content">
                <h2>Sign In</h2>
                  <TextField
                    floatingLabelText="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.hanldeFieldChange}
                  />
                  <br/>
                  <TextField
                    floatingLabelText="Password"
                    name="password"
                    type='password'
                    value={this.state.password}
                    onChange={this.hanldeFieldChange}
                  />
              </div>
            </Tab>
            <Tab label="Create Account" value={1}>
              <div className="tab-content">
                <h2>Create an Account</h2>
                  <TextField
                    floatingLabelText="Username"
                    name="createUsername"
                    value={this.state.createUsername}
                    onChange={this.hanldeFieldChange}
                  />
                  <br/>
                  <TextField
                    floatingLabelText="Password"
                    name="createPassword"
                    type='password'
                    value={this.state.createPassword}
                    onChange={this.hanldeFieldChange}
                  />
                  <br/>
                  <TextField
                    floatingLabelText="Confirm Password"
                    name="createPasswordConfirm"
                    type='password'
                    value={this.state.createPasswordConfirm}
                    onChange={this.hanldeFieldChange}
                  />
              </div>
            </Tab>
          </Tabs>
        </Dialog>
    );
  }
});
