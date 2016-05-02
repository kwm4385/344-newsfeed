import { Dialog, FlatButton, Tabs, Tab, TextField } from 'material-ui'
import React  from 'react'

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

  handleTabChange(t) {
    this.setState({
      tab: t
    });
  },

  hanldeFieldChange(e) {
    let s = {};
    s[$(e.target).attr('name')] = $(e.target).val();
    this.setState(s);
  },

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    console.log(this.state);
    return (
      <Dialog
          className="user-model"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Tabs onChange={this.handleTabChange}>
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
                    value={this.state.createPassword}
                    onChange={this.hanldeFieldChange}
                  />
                  <br/>
                  <TextField
                    floatingLabelText="Confirm Password"
                    name="createPasswordConfirm"
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
