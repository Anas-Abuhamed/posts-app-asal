const deletePost = async (postId) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "DELETE",
  });
}

export { deletePost }
