import { redirect } from "react-router";
import { getCookieFromRequest } from "~/utils/cookies";
const loader = ({ request }) => {
    const userId = getCookieFromRequest(request, "userId");
    if (userId) {
        return redirect("/", {
            headers: {
                "Set-Cookie": "userId=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
            }
        });
    }
    return null
}
export { loader };
