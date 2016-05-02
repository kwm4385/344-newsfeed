import { Card, CardHeader, CardText, CardActions, FlatButton, Checkbox } from 'material-ui'
import Colors  from 'material-ui/lib/styles/colors'
import ActionFavorite  from 'material-ui/lib/svg-icons/action/favorite'
import ActionFavoriteBorder  from 'material-ui/lib/svg-icons/action/favorite-border'
import moment  from 'moment'
import React  from 'react'
import FeedActions  from '../actions/FeedActions.js'

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

  handleToggleFavorite(story) {
    FeedActions.toggleFavoriteStory(story);
  },

  strip(html) {
    // var tmp = document.createElement("div");
    // tmp.innerHTML = html;
    // return tmp.textContent || tmp.innerText || "";
    var regex = /(<([^>]+)>)/ig
    return html.replace(regex, "");
  },

  renderCards() {
    let cards = _.map(this.state.stories, (s, k) => {
      // console.log(s);
      return (
        <Card className="story" key={k} style={{borderLeft: '5px solid ' + s.feed.color}}>
          <CardHeader
            className="story-header"
            title={<a className="title-link" href={s.link} target="blank">{s.title}</a>}
            subtitle={moment(s.pubDate).format('MMMM Do YYYY, h:mm a')}
            avatar="images/logo.jpg"
          />
          <CardText>
            <p>{this.strip(s.description)}</p>
            <a href={s.link} target="blank">Read more...</a>
          </CardText>
          <CardActions>
            <Checkbox
              className="fav-toggle"
              label="Favorite"
              onCheck={() => this.handleToggleFavorite(s)}
              defaultChecked={s.isFavorite}
              checkedIcon={<ActionFavorite />}
              unCheckedIcon={<ActionFavoriteBorder />}
            />
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
