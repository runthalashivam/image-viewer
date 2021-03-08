import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIconBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIconFill from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      comment: '',
    }
  }

  onLikeClicked = (id) => {
    if (this.state.isLiked) {
      this.setState({
        isLiked: false
      });
    } else {
      this.setState({
        isLiked: true
      });
    }
    this.props.onLikedClicked(id)
  }

  commentChangeHandler = (e) => {
    this.setState({
      comment: e.target.value,
    });
    this.props.commentChangeHandler(e);
  }

  onAddCommentClicked = (id) => {
    if (this.state.comment === "" || typeof this.state.comment === undefined) {
      return;
    }
    this.setState({
      comment: ""
    });
    this.props.onAddCommentClicked(id);
  }

  render() {
    const { classes, item, comments } = this.props;

    let createdTime = new Date(item.timestamp);
    let yyyy = createdTime.getFullYear();
    let mm = createdTime.getMonth() + 1;
    let dd = createdTime.getDate();

    let HH = createdTime.getHours();
    let MM = createdTime.getMinutes();
    let ss = createdTime.getSeconds();

    let time = dd + "/" + mm + "/" + yyyy + " " + HH + ":" + MM + ":" + ss;
    let hashTags = item.tags.map(hash => {
      return "#" + hash;
    });
    return (
      <div className="home-main-container">
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar alt="User Profile Pic" src={item.profile_picture} className={classes.avatar} />
            }
            title={item.username}
            subheader={time}
          />
          <CardContent>
            <CardMedia
              className={classes.media}
              image={item.media_url}
              title={item.caption}
            />
            <div className={classes.hr}>
              <Typography component="p">
                {item.caption}
              </Typography>
              <Typography style={{ color: '#4dabf5' }} component="p" >
                {hashTags.join(' ')}
              </Typography>
            </div>
          </CardContent>

          <CardActions>
            <IconButton aria-label="Add to favorites" onClick={this.onLikeClicked.bind(this, item.id)}>
              {this.state.isLiked && <FavoriteIconFill style={{ color: '#F44336' }} />}
              {!this.state.isLiked && <FavoriteIconBorder />}
            </IconButton>
            <Typography component="p">
              {item.likes_count} Likes
              </Typography>
          </CardActions>

          <CardContent>
            {comments.hasOwnProperty(item.id) && comments[item.id].map((comment, index) => {
              return (
                <div key={index} className="row">
                  <Typography component="p" style={{ fontWeight: 'bold' }}>
                    {sessionStorage.getItem('username')}: 
                  </Typography>
                  <Typography component="p" >
                    {comment}
                  </Typography>
                </div>
              )
            })}
            <div className={classes.formControl}>
              <FormControl style={{ flexGrow: 1 }}>
                <InputLabel htmlFor="comment">Add a comment</InputLabel>
                <Input id={"comment-" + item.id} value={this.state.comment} onChange={this.commentChangeHandler} />
              </FormControl>
              <FormControl>
                <Button onClick={this.onAddCommentClicked.bind(this, item.id)}
                  variant="contained" color="primary">
                  ADD
                </Button>
              </FormControl>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

}

export default Post;