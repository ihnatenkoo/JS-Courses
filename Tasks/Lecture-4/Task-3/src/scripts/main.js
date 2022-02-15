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

    const userPostAndComments = userPosts.map(post => {
      const commentsForPost = comments.filter((comment) => comment.postId === post.id);
      return { ...post, comments: commentsForPost };
    })

    user.posts = userPostAndComments;

    return user;
  });

  return userList;
};