import { Link } from "react-router";

const Posts = ({ posts }) => {
    return (
        <>
            <div className="posts-container">
                {posts.map((post, index) => (
                    <div className="post-card" key={post.id}>
                        <h2>{index + 1}. {post.title}</h2>
                        <Link to={`/dashboard/posts/${post.id}`}>View Post</Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Posts;
