import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Modal from 'material-ui/Modal';
import { CircularProgress } from 'material-ui/Progress';

import { loadMore } from './actions';
import GifItemUI from '../../components/gif-item-ui';
import GifItemDetailUI from '../../components/gif-item-defail-ui';

import styles from './list.styles';

const limit = 20;

class List extends Component {
  constructor(props) {
    super(props);
    this.doViewDetail = this.doViewDetail.bind(this);
    this.doCloseViewDetail = this.doCloseViewDetail.bind(this);
    this.state = {
      showModal: false,
      viewItem: {},
    };
  }
  componentWillMount() {
    const { pagination } = this.props;
    const loadMoreParams = {
      offset: limit + pagination.offset,
      limit,
    };
    this.props.doLoadMore(loadMoreParams);
  }
  doViewDetail(item) {
    this.setState({ showModal: true, viewItem: item });
  }
  doCloseViewDetail() {
    this.setState({ showModal: false });
  }
  renderModal() {
    const { viewItem, showModal } = this.state;
    if (viewItem && viewItem.images) {
      return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={showModal}
          onClose={this.doCloseViewDetail}
        >
          <GifItemDetailUI data={viewItem} onClose={this.doCloseViewDetail} />
        </Modal>
      );
    }
    return '';
  }
  render() {
    const {
      classes,
      data,
      doLoadMore,
      pagination,
      isLoading,
    } = this.props;
    const loadMoreParams = {
      offset: limit + pagination.offset,
      limit,
    };
    let itemImg = '';
    if (data && data.length) {
      itemImg = data.map(item => <GifItemUI key={item.id} doViewDetail={this.doViewDetail} data={item} />);
    }
    return (
      <div className={classes.listContainer}>
        <h1 className={classes.title}>Trending Gifs</h1>
        <div className={classes.listImgs}>
          <Grid container spacing={24}>
            { itemImg }
          </Grid>
        </div>
        { isLoading
          ? <CircularProgress className={classes.button} />
          : (
            <Button
              onClick={() => doLoadMore(loadMoreParams)}
              variant="raised" color="primary" className={classes.button}>
              Load more
            </Button>
          )
        };
        { this.renderModal() }
      </div>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
  doLoadMore: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  data: state.data,
  pagination: state.pagination,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  doLoadMore: offset => dispatch(loadMore(offset)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(List);
