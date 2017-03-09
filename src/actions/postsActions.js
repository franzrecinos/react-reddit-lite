import Config from '../config';
import axios from 'axios';
import {isNil} from 'lodash';

export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const RECIEVE_POSTS_ERROR = 'RECIEVE_POSTS_ERROR';

// export const recievePostsError = error => ({
//   type: RECIEVE_POSTS_ERROR,
//   error,
// });

export const recievePosts = posts => ({
  type: RECIEVE_POSTS,
  posts,
});

export const shouldFetchPosts = (state, posts) => {

}

export const fetchPosts = (search, posts) => {
console.log(search)
  console.log(posts)
}