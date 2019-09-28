import React from 'react';
import PropTypes from 'prop-types';

class BlogFormPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: props.blog ? props.blog.title : '',
      content: props.blog ? props.blog.content : '',
      date: props.date ? props.blog.date : ''
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({
      title
    }))
  };

  onContentChange = (e) => {
    const content = e.target.value;
    this.setState(() => ({
      content
    }))
  };

  onSubmit = (e) => {
    e.preventDefault();
      this.props.onSubmit({
        ...this.state,
        date: Date.now()
      });
  }

  render() {
    return (
      <div>
        <form
          className="form"
          onSubmit={this.onSubmit}
        >
        <input
          className="text-input"
          type="text"
          value={this.state.title}
          onChange={this.onTitleChange}
          placeholder="Catchy Title.."
        />
        <textarea
          type="text"
          className="text-area"
          value={this.state.content}
          onChange={this.onContentChange}
          placeholder="...."
        />

        <button
          className="button"
          type="submit"
        > Save & Publish </button>

      </form>
    </div>
    )
  }
}


BlogFormPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string
}

export default BlogFormPage;