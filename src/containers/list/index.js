import React, { Component } from 'react';
import { createStore } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import Reducers from './reducers';

const gif = 'http://localhost:8699/assets/images/demo.gif';
const avatar = 'http://localhost:8699/assets/images/avatar.png';

const styles = () => ({
  listContainer: {
    width: '100%',
  },
  title: {
    fontWeight: 'normal',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  listImgs: {
    width: '100%',
    maxWidth: 1000,
    margin: 'auto',
    display: 'block',
    padding: '0 10px',
    boxSizing: 'border-box',
  },
  imageItem: {
    padding: 10,
  },
  button: {
    margin: '50px auto',
    display: 'block',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  userInfo: {
    display: 'flex',
    marginTop: 10,
    alignItems: 'center',
  },
  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
  },
  itemTitle: {
    width: '100%',
    whiteSpace: 'nowrap',
    fontSize: 14,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: 10,
  },
});

const store = createStore(Reducers);

class ContainerList extends Component {
  constructor(props) {
    super(props);
    this.handleClickImage = this.handleClickImage.bind(this);
  }
  handleClickImage(id) {
    console.log('Click', id);
  }
  render() {
    const { classes } = this.props;
    const itemImg = [];
    for (let i = 0; i < 20; i += 1) {
      itemImg.push(<Grid item xs={6} sm={4} md={3} key={i}>
        <Paper className={classes.imageItem}>
          <h4 className={classes.itemTitle}>oh my god omg GIF by Yosub Kim, Ruler of Butts</h4>
          <img src={gif} className={classes.img} />
          <a href="#" target="_blank">
            <div className={classes.userInfo}>
              <img className={classes.userAvatar} src={avatar} />
              <div className={classes.userName}>Nick At Nite</div>
            </div>
          </a>
        </Paper>
      </Grid>);
    }
    return (
      <div className={classes.listContainer}>
        <h1 className={classes.title}>Trending Gifs</h1>
        <div className={classes.listImgs}>
          <Grid container spacing={24}>
            { itemImg }
          </Grid>
        </div>
        <Button variant="raised" color="primary" className={classes.button}>
          Load more
        </Button>
      </div>
    );
  }
}

ContainerList.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ContainerList);