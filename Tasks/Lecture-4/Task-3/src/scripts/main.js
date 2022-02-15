import axios from 'axios';

export const getData = async(url) => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch(error) {
    console.log(error)
  }
};

const userWithPostAndComments = async() => {
  const users = await getData('https://jsonplaceholder.typicode.com/users');
  const posts = await getData('https://jsonplaceholder.typicode.com/posts');
  const comments = await getData('https://jsonplaceholder.typicode.com/comments');

  const userList = users.map(user => {
    const userPosts = posts.filter(post => user.id === post.userId);

    user.posts = userPosts;

    const userPostComments = userPosts.map(postComments => {
      return comments.filter((comment) => comment.postId === postComments.id);
    })

    user.comments = userPostComments;

    return user;
  });

  return userList;
};