import { redirect } from "react-router";
import { getCookieFromClientSide, getCookieFromRequest } from "../utils/cookies";
function redirectIfLoggedIn({request}) {
    const userId = getCookieFromRequest(request, "userId");
    if (userId)
        return redirect("/dashboard");
    return null;
}

function requireAuth({request}) {
    const userId = getCookieFromRequest(request, "userId");
    if (!userId)
        return redirect("/login");
    return null;
}

export { redirectIfLoggedIn, requireAuth }