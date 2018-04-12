import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  signInContainer: {
    ...theme.boxStyle,
    width: 320,
    margin: 'auto',
    marginTop: 50,
    padding: 20,
  },
  title: {
    fontWeight: 'normal',
    fontSize: 30,
    textAlign: 'center',
  },
});

class ContainerDetail extends Component {
  constructor(props) {
    super(props);
    this.handleClickImage = this.handleClickImage.bind(this);
  }
  handleClickImage(id) {
    console.log('Click', id);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.signInContainer}>
        <h1 className={classes.title}>Sign in</h1>
      </div>
    );
  }
}

ContainerDetail.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ContainerDetail);
