import { FETCH_POSTS, NEW_POST } from './types'

// this is its final form on ES6

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then( post =>
    dispatch({
      type: NEW_POST,
      payload: post
    })
  )
}


// this came from here which is ES5
// part a.1

// export function fetchPosts () {
//   return function (dispatch) {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data =>
//       this.setState({posts: data})
//     );
//   }
// }

//part a.2

// export function fetchPosts () {
//   return function (dispatch) {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts =>
//       dispatch ({
//         type: FETCH_POSTS,
//         payload: posts
//       })
//     );
//   }
// }
