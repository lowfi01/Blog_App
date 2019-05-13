import React from 'react';
import {connect} from 'react-redux';

import BlogFormPage from './BlogFormPage';
import {startEditBlogPost} from '../actions/blog';

const EditBlogPage = (props) => {
  const onSubmit = (state) => {
    props.dispatch(startEditBlogPost(props.match.params.id, state ))
    props.history.push('/');
  }

  return (
    <div>
      <h1>Edit your Blog</h1>
      <BlogFormPage
        blog={props.blog}
        onSubmit={onSubmit}
        />
    </div>
  )
}

const mapStateToProps = (state, props) => ({
    blog: state.blogs.find((blog) => {
     return blog.id === props.match.params.id
    })
  })


export default connect(mapStateToProps)(EditBlogPage);