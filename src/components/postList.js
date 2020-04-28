import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostList } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostList();
  }
  render() {
    return <div>PostList</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    PostList: state.postList,
  };
};
export default connect(mapStateToProps, { fetchPostList })(PostList);
