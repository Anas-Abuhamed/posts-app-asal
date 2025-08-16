import { Link } from "react-router"

const Posts = ({ posts }) => {
    return (
        <>
            {posts.map((post, index) => {
                return <div key={post.id}>
                    <h2>{index + 1}. {post.title}</h2>
                    <Link to={`/dashboard/posts/${post.id}`}>View Post</Link>
                </div>
            }
            )}
        </>
    )
}
export default Posts;
