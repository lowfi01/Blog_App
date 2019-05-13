import React from 'react';
import {connect} from 'react-redux';

import BloglistItem from './BloglistItem';
import { startRemoveBlogPost } from '../actions/blog';
import filters from '../selectors/filter';

const Bloglist = (props) => {
    const remove = (id) => {
      props.dispatch(startRemoveBlogPost(id))
    }
    return (
      <div className="content-container">
        <div >
        {
          props.blogs.length === 0 ? (
            <p>No Blogs Created</p>
          ) : (
            props.blogs.map((data) => <BloglistItem key={data.id} {...data} remove={remove} />)
          )
        }
        </div>
      </div>
    )


  }

const mapStateToProps = (state) => ({
  blogs: filters(state.blogs, state.filters)
})

export default connect(mapStateToProps)(Bloglist);