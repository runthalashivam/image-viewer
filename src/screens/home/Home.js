import React, { Component } from 'react';
import Header from '../../common/header/Header';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import { constants } from '../../common/utils'

import './Home.css';
import Post from './Post';

const styles = theme => ({
  card: {
    maxWidth: 1100,
  },
  avatar: {
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  comment: {
    display: 'flex',
    alignItems: 'center'
  },
  hr: {
    marginTop: '10px',
    borderTop: '2px solid #f2f2f2'
  },
  gridList: {
    width: 1100,
    height: 'auto',
    overflowY: 'auto',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90
  }
});

class Home extends Component {

  constructor(props) {
    super(props);
    if (sessionStorage.getItem('access-token') == null) {
      props.history.replace('/');
    }
    this.state = {
      data: [],
      userPostsData: [],
      likeSet: new Set(),
      comments: {},
      currentComment: ""
    }
  }

  componentDidMount() {
    this.getUserPosts();
  }

  getUserPosts = () => {
    let mediaIdData = {};
    let url = `${constants.mediaIdUrl}&access_token=${sessionStorage.getItem('access-token')}`;
    fetch(url, {
      method: 'GET',
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      let mediaData = []
      let commentsData = {}
      for (let postIndex in jsonResponse.data) {
        let post = {};
        post.id = jsonResponse.data[postIndex]["id"];
        post.caption = jsonResponse.data[postIndex]["caption"];
        let url = `${constants.mediaDetailUrl}/${post.id}${constants.mediaDetailUrlFields}&access_token=${sessionStorage.getItem('access-token')}`
        fetch(url, {
          method: 'GET',
        }).then((response) => {
          return response.json();
        }).then((jsonResponse) => {
          post.username = jsonResponse.username;
          post.media_url = jsonResponse.media_url;
          post.timestamp = jsonResponse.timestamp;
          // As profile picture is not available from API adding fix profile pic
          post.profile_picture = constants.profilePicUrl;
          // As likes count is not available from API adding random number between 1 to 100 
          post.likes_count = Math.floor((Math.random() * 100) + 1);
          // As hashtags are not available from API adding random hashtags 
          const shuffledHashtags = constants.hashtags.sort(() => 0.5 - Math.random());
          post.tags = shuffledHashtags.slice(0, ((Math.random() * 10) + 1));
          // As comments are not available from API adding random comments 
          const shuffledComments = constants.comments.sort(() => 0.5 - Math.random());
          commentsData[jsonResponse.id] = shuffledComments.slice(0, ((Math.random() * 5) + 1));
          mediaData.push(post);
          this.setState({
            data: mediaData,
            userPostsData: mediaData,
            comments: commentsData
          })
        }).catch((error) => {
          console.log('error user data', error);
        });
      }
    }).catch((error) => {
      console.log('error user data', error);
    });
    return mediaIdData;
  }

  onSearchEntry = (value) => {
    let userPostsData = this.state.data;
    userPostsData = userPostsData.filter((data) => {
      let string = data.caption.toLowerCase();
      let subString = value.toLowerCase();
      return string.includes(subString);
    })
    this.setState({
      userPostsData
    })
  }

  likeClickHandler = (id) => {
    var foundItem = this.state.data.find((item) => {
      return item.id === id;
    })

    if (typeof foundItem !== undefined) {
      if (!this.state.likeSet.has(id)) {
        foundItem.likes_count++;
        this.setState(({ likeSet }) => ({
          likeSet: new Set(likeSet.add(id))
        }))
      } else {
        foundItem.likes_count--;
        this.setState(({ likeSet }) => {
          const newLike = new Set(likeSet);
          newLike.delete(id);
          return {
            likeSet: newLike
          };
        });
      }
    }
  }

  addCommentClickHandler = (id) => {
    if (this.state.currentComment === "" || typeof this.state.currentComment === undefined) {
      return;
    }

    let commentList = this.state.comments.hasOwnProperty(id) ?
      this.state.comments[id].concat(this.state.currentComment) : [].concat(this.state.currentComment);

    this.setState({
      comments: {
        ...this.state.comments,
        [id]: commentList
      },
      currentComment: ''
    })
  }

  logout = () => {
    sessionStorage.clear();
    this.props.history.replace('/');
  }

  navigateToAccount = () => {
    this.props.history.push('/profile');
  }

  commentChangeHandler = (e) => {
    this.setState({
      currentComment: e.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          // Since Instagram API doesn't provide the profile pic, mocking it
          userProfilePicUrl={constants.profilePicUrl}
          screen={"Home"}
          searchHandler={this.onSearchEntry}
          handleLogout={this.logout}
          handleAccount={this.navigateToAccount} />
        <div className={classes.grid}>
          <GridList className={classes.gridList} cellHeight={'auto'}>
            {this.state.userPostsData.map(item => (
              <GridListTile key={item.id}>
                <Post
                  classes={classes}
                  item={item}
                  onLikedClicked={this.likeClickHandler}
                  onAddCommentClicked={this.addCommentClickHandler}
                  commentChangeHandler={this.commentChangeHandler}
                  comments={this.state.comments} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);