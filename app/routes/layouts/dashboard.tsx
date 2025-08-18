import { Outlet, useFetcher } from "react-router";
import { postPost } from "~/api/postApi";
import Dashboard from "~/components/Dashboard"
import { getCookieFromRequest } from "~/utils/cookies";
const action = async ({ request }) => {
    const userId = getCookieFromRequest(request, "userId");
    try {
        const formData = await request.formData();
        const title = formData.get("title");
        const body = formData.get("body");
        const newPost = { id: crypto.randomUUID(), userId, title, body };
        return await postPost(newPost);
    }
    catch (err) {
        console.error("Error in addition:", err);
        return null;
    }
}
const dashboard = () => {
    const fetcher = useFetcher();
    return (
        <>
            <Dashboard fetcher={fetcher} />
            <Outlet />
        </>
    )
}

export { action };
export default dashboard;