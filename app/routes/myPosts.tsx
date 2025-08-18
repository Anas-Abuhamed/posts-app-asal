import { useLoaderData } from "react-router";
import { getPosts } from "~/api/getApi";
import Posts from "~/components/Posts";
import { getCookieFromRequest } from "~/utils/cookies"

const loader = async ({ request }) => {
    const userId = getCookieFromRequest(request, "userId");
    const posts = await getPosts();
    return { userId, posts }
}
const MyPosts = () => {
    const { userId, posts } = useLoaderData();
    let filteredPosts = posts ? posts : [];
    filteredPosts = filteredPosts.filter(post => post.userId == userId);
    return (
        <>
            <Posts posts={filteredPosts} />
        </>
    )
}
export { loader };
export default MyPosts;
