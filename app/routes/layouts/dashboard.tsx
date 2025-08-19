import { lazy, Suspense } from "react";
import { Outlet, redirect, useFetcher } from "react-router";
import { postPost } from "~/api/postApi";
const Dashboard = lazy(() => import("~/components/Dashboard"));
import { getCookieFromRequest } from "~/utils/cookies";
const action = async ({ request }) => {
    try {
        const userId = getCookieFromRequest(request, "userId");
        const formData = await request.formData();
        const logout = formData.get("logout");
        if (logout) {
            return redirect("/", {
                headers: {
                    "Set-Cookie": "userId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
                }
            });
        }
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
        <Suspense fallback={<p>Loading...</p>}>
            <Dashboard fetcher={fetcher} />
            <Outlet />
        </Suspense>
    )
}

export { action };
export default dashboard;