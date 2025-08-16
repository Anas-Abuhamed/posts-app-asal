const getPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  return posts;
}

const getPost = async (postId) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await data.json();
  return post;
}

const getComments = async (postId) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  const comments = await data.json();
  return comments;
}

const getUsers = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return users;
}

export { getPosts, getPost, getComments, getUsers }
