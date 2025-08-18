import { Fragment } from "react/jsx-runtime";

const Post = ({ post, comments, fetcher }) => {
    return (
        <div className="post-card">
            <h2>Post {post.id}</h2>
            <h2>Title: {post.title}</h2>
            <p>Body: {post.body}</p>

            <h3>Comments:</h3>
            {comments.map((comment, index) => (
                <Fragment key={comment.id}>
                    <h2>
                        {index + 1}. {comment.body}
                    </h2>
                </Fragment>
            ))}

            <fetcher.Form method="delete">
                <button type="submit">Delete Post</button>
            </fetcher.Form>
        </div>
    );
};

export default Post;
