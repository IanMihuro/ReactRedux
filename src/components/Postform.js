import React, { Component } from 'react'
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {createPost} from '../actions/postActions';

class Postform extends Component {

    state = {
        title: '',
        body: '',
    };

    onChange =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit =(event)=>{
        event.preventDefault();

        const { title, body} = this.state;

        // Call action and pass state
        this.props.createPost({title, body});

        this.setState({ title: '', body: '' });
    }

  render() {
      const {title, body} = this.state;
    return (
      <div>
          <h1>Add Post</h1>
          <form onSubmit={this.onSubmit}>
              <div>
                  <label>Title: </label>
                  <br />
                  <input 
                  name="title" 
                  type="text" 
                  value={title}
                  onChange={this.onChange} 
                  />
              </div>
              <br />
              <div>
                  <label>Body: </label>
                  <br />
                  <textarea 
                  name="body" 
                  value={body}
                  onChange={this.onChange} 
                  />
              </div>
              <br />
              <button type="submit">Submit</button>
          </form>
        
      </div>
    )
  }
}

Postform.propTypes = {
    createPost: PropTypes.func
}

export default connect(null, {createPost})(Postform) ;
