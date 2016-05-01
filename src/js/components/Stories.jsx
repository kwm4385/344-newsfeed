import moment  from 'moment'
import React  from 'react'

export default React.createClass({
  getInitialState() {
    return {
      stories: []
    };
  },

  componentDidMount() {
    this.mergeStories();
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.props != prevProps) {
      this.mergeStories();
    }
  },

  mergeStories() {
    let stories = [];
    _.keys(this.props.feeds).forEach((f) => {
      if (this.props.active[f] && this.props.feeds[f]) {
        stories = _.union(stories, this.props.feeds[f]);
      }
    });
    stories = _.sortBy(stories, (s) => {
      return moment(s.pubDate);
    }).reverse();
    this.setState({
      stories: stories
    });
  },

  renderCards() {
    let cards = _.map(this.state.stories, (s) => {
      return <p>{s.pubDate}</p>
    });
    return cards;
  },

  render() {
    console.log(this.state);
    return (
      <div>{this.renderCards()}</div>
    );
  }
});
