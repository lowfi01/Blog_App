const blogDefaultState = [];

const blogReducer = (state = blogDefaultState, action) => {
  switch(action.type){
    case 'ADD_BLOG':
      return [ ...state, action.blog ]
    case 'REMOVE_BLOG':
      return state.filter((blog) => { if(blog.id !== action.id) return true });
    case 'SET_BLOGS':
      return action.blogs
    case 'EDIT_BLOG':
      // map over array of blogs to edit the one we want
      const hold = state.map((blog) => {
        // find blog to edit & return new version
        if (blog.id === action.id) {
          return {
            ...blog,
            ...action.update
          }
        }
        return blog; // return all other blogs
      })
       return hold;
    default:
      return state;
  }
}

export default blogReducer;
