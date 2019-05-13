import React from 'react';
import {connect} from 'react-redux'
import {setTextFilter} from '../actions/filters';



class BlogListFilter extends React.Component {
  render(){
    return (
      <div className="content-container">
        <div className="input-group">

          <input
            type="text"
            className="text-input"
            placeholder="Search Blog Titles.."
            value={this.props.filters.text}
            onChange={e => {
              this.props.dispatch(setTextFilter(e.target.value))}
              }
            />

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(BlogListFilter);
