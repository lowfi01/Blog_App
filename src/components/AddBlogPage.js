import React from 'react';
import {connect} from 'react-redux';

import BlogFormPage from './BlogFormPage';
import {startAddBlogPost} from '../actions/blog';

const AddBlogPage = (props) => {
  const onSubmit = (blog) => {
    props.dispatch(startAddBlogPost(blog));
    props.history.push('/');
  }

  return (
    <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Create Post</h1>
          </div>
        </div>

        <div className="content-container">
          <BlogFormPage onSubmit={onSubmit} />
        </div>

      </div>
  )
}

export default connect()(AddBlogPage);