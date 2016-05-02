import { Card, CardHeader, CardText, CardActions, FlatButton, IconButton } from 'material-ui'
import Colors  from 'material-ui/lib/styles/colors'
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

  strip(html) {
    var tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  },

  renderCards() {
    let cards = _.map(this.state.stories, (s, k) => {
      // console.log(s);
      return (
        <Card className="story" key={k}>
          <CardHeader
            title={<a className="title-link" href={s.link} target="blank">{s.title}</a>}
            subtitle={moment(s.pubDate).format('MMMM Do YYYY, h:mm a')}
            avatar="/images/logo.jpg"
          />
          <CardText>
            <p>{this.strip(s.description)}</p>
            <a href={s.link} target="blank">Read more...</a>
          </CardText>
          <CardActions>
            <IconButton iconClassName="material-icons" tooltip="Favorite" tooltipPosition="top-center">
              favorite_border
            </IconButton>
          </CardActions>
        </Card>
      );
    });
    return cards;
  },

  render() {
    return (
      <div>{this.renderCards()}</div>
    );
  }
});
