import { Fragment } from "react/jsx-runtime";

const Post = ({ post, comments, fetcher }) => {
    return (
        <div>
            <h2>Post {post.id}</h2>
            <br />
            <h2>Title: {post.title}</h2>
            <br />
            <p>Body: {post.body}</p>
            <br />
            <h3>Comments:</h3>
            <br />
            {comments.map((comment, index) => <Fragment key={comment.id}><h2 >{index + 1}. {comment.body}</h2><br /></Fragment>)}
            <fetcher.Form method="delete">
                <button type="submit">Delete Post</button>
            </fetcher.Form>
        </div>
    )
}

export default Post;
