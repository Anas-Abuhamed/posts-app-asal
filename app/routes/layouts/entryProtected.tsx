import { Outlet, redirect } from 'react-router'
import { getCookieFromRequest } from '~/utils/cookies';
const loader = async ({ request }) => {
    const userId = getCookieFromRequest(request, "userId");
    if (userId)
        return redirect("/dashboard")
    return null;
}
const EntryProtected = () => {
    return (
        <Outlet />
    )
}
export { loader };
export default EntryProtected;
