import { useFetcher, useLoaderData } from "react-router";
import { deletePost } from "~/api/deleteApi";
import { getComments, getPost } from "~/api/getApi"
import Post from "~/components/Post";
const loader = async ({ params }) => {
    const post = await getPost(params.postId);
    const comments = await getComments(params.postId);
    return { post, comments }
}
const action = async ({ params }) => {
    try {
        await deletePost(params.postId);
        return { isDeleted: true }
    }
    catch {
        return { isDeleted: false }
    }
}
const post = () => {
    const { post, comments } = useLoaderData();
    const fetcher = useFetcher();
    let isDeleted = fetcher.data?.isDeleted;
    if (isDeleted) {
        return <h2 className="success">Post deleted successfully</h2>;
    }
    return (
        <Post post={post} comments={comments} fetcher={fetcher} />
    )
}
export { loader, action }
export default post;
