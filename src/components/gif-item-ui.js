import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = () => ({
  imageItem: {
    padding: 10,
  },
  img: {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
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
    marginTop: 0,
    cursor: 'pointer',
    width: '100%',
    whiteSpace: 'nowrap',
    fontSize: 14,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: 10,
  },
});

const GifItemUI = (props) => {
  const { classes, doViewDetail, data } = props;
  return (
    <Grid id={data.id} item xs={6} sm={4} md={3}>
      <Paper className={classes.imageItem}>
        <h4 onClick={() => doViewDetail(data)}
          src={data.images.fixed_width.url}
          className={classes.itemTitle}>
          {data.title}
        </h4>
        <img onClick={() => doViewDetail(data)}
          src={data.images.fixed_width.url}
          className={classes.img} />
        { data.user ? (
          <a href={data.user.profile_url || '#'} target="_blank">
            <div className={classes.userInfo}>
              <img className={classes.userAvatar} src={data.user.avatar_url} />
              <span className={classes.userName}>
                {data.user.display_name && data.user.display_name !== ''
                  ? data.user.display_name : data.user.username}
              </span>
            </div>
          </a>
        ) : '' }
      </Paper>
    </Grid>
  );
};

GifItemUI.propTypes = {
  classes: PropTypes.object.isRequired,
  doViewDetail: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(GifItemUI);
