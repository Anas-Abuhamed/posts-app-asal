import { Outlet, redirect } from "react-router";
import { getCookieFromRequest } from "~/utils/cookies";

const loader = ({ request }) => {
    const userId = getCookieFromRequest(request, "userId");
    if (!userId)
        return redirect("/");
    return null;
}
const protectedRoute = () => {
    return (
        <Outlet />
    )
}
export { loader };
export default protectedRoute;
