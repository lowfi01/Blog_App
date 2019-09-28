import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import {distanceInWords} from 'date-fns';


const BloglistItem = ({id, title, content, remove, date}) => (
    <Link
      className="list-item"
      to={`/edit/${id}`}
    >
      <div>
          <h3 className="list-item__title">{title} {distanceInWords(new Date(date))}</h3>
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
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired
}

BloglistItem.defaultProps = {
  title: '',
  content: ''
}

export default BloglistItem;