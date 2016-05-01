import { CircularProgress } from 'material-ui'
import React  from 'react'

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div className="loader">
        <CircularProgress 
          status="loading"
        />
      </div>
    );
  }
});
