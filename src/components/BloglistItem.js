import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';



const BloglistItem = ({id, title, content, remove}) => (
    <Link
      className="list-item"
      to={`/edit/${id}`}
    >
      <div>
          <h3 className="list-item__title">{title}</h3>
          <span className="missing">
          {content}
          </span>
          <button onClick={(e) => {
            e.preventDefault();
            remove(id);
          }
          }>
            Remove
          </button>
      </div>
    </Link>
  )


BloglistItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
  remove: PropTypes.func
}

BloglistItem.defaultProps = {
  title: '',
  content: ''
}

export default BloglistItem;