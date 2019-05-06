import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {fetchPosts} from '../actions/postActions';

class Posts extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.post){
      this.props.posts.unshift(nextProps.post);
    }
  }


  render() {
    const postItem = this.props.posts.map(post =>(
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItem}           
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.array,
  post: PropTypes.object,
};


const mapStateToProps = state => ({
  posts: state.posts.items,
  post: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
