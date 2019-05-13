import database from '../firebase/firebase';

// Use database first before using action
export const startAddBlogPost = (blogData = {}) =>
  (dispatch) => {
    database.ref('users/blogposts')
      .push(blogData)
      .then((ref) => {
        dispatch(addBlogPost({
          id: ref.key,
          ...blogData
        }))
      })
  }

// Use database and delete blog entry before running action
export const startRemoveBlogPost = (id) =>
  (dispatch) => {
    database.ref(`users/blogposts/${id}`)
      .remove()
      .then(() => {
        dispatch(removeBlogPost(id));
      })
      .catch((e) => {
        console.log('remove from database failed: ', e);
      })
  }


// User database first before using action
export const startsetBlogPosts = () =>
  (dispatch) => database.ref('users/blogposts')
      .once('value')
      .then((data) => {
        const blogs = [];
        console.log('All blog data from firebase fetch: ',data.val());
        data.forEach(blog => {
          blogs.push({
            id: blog.key,
            ...blog.val()
          })
        })

        dispatch(setBlogPosts(blogs));
      })

// User database first before using action
export const startEditBlogPost = (id, update) => {
  return (dispatch) => {
    return database.ref(`users/blogposts/${id}`)
      .update(update)
      .then(() => {
        dispatch(editBlogPost(id, update))
      })
  }
}



// add blog to reducer
export const addBlogPost = (blog) => ({
  type: 'ADD_BLOG',
  blog
})

// fetch & store all blogs to reducer
export const setBlogPosts = (blogs) => ({
  type: 'SET_BLOGS',
  blogs
})


// edit a blog post
export const editBlogPost = (id, update) => {
  return {
    type: 'EDIT_BLOG',
    id,
    update
  }
}

// remove a blog post
export const removeBlogPost = (id) => {
  return {
    type: 'REMOVE_BLOG',
    id
  }
}