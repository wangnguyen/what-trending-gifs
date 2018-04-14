import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Close from '@material-ui/icons/Close';


const styles = theme => ({
  modalPaper: {
    position: 'absolute',
    width: '70%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    top: 50,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 20,
    cursor: 'pointer',
  },
  imageContent: {
    '& img': {
      width: 'auto',
      maxWidth: '100%',
    },
  },
  imageTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
});

const GifItemUI = (props) => {
  const { classes, onClose, data } = props;
  return (
    <div className={classes.modalPaper}>
      <Close className={classes.closeIcon} onClick={() => onClose()} />
      <Grid container spacing={24}>
        <Grid item xs={12} sm={7}>
          <div className={classes.imageContent}>
            <img src={data.images.original.url} />
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className={classes.infoContent}>
            <h3 className={classes.imageTitle}>{data.title}</h3>
            <div>
              <b>Rating: </b><span>{data.rating}</span>
            </div>
            <div>
              <b>Import date: </b><span>{data.import_datetime}</span>
            </div>
            <div>
              <b>Trending date: </b><span>{data.trending_datetime}</span>
            </div>
            {data.user ? (
              <div>
                <b>User: </b>
                <a target="_blank" href={data.user.profile_url || '#'}>
                  {data.user.display_name && data.user.display_name !== ''
                    ? data.user.display_name : data.user.username}
                </a>
              </div>
            ) : ''}
          </div>
        </Grid>
      </Grid>
    </div>

  );
};

GifItemUI.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(GifItemUI);
