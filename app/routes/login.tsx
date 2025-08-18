import { useState } from "react";
import { Link, redirect, useFetcher } from "react-router";
import { getUsers } from "~/api/getApi";
const action = async ({ request }) => {
    try {
        const formData = await request.formData();
        const email = formData.get("email");
        const users = await getUsers();
        const user = users.find((user) => user.email === email);
        if (user) {
            return redirect("/dashboard", {
                headers: {
                    "Set-Cookie": `userId=${encodeURIComponent(user.id)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`
                }
            });
        }
        return { message: "User not found", status: 404 };
    }
    catch (err) {
        console.error(err)
    }
}
const Login = () => {
    const [email, setEmail] = useState("");
    const fetcher = useFetcher();
    const message = fetcher.data?.message;
    return (
        <>
            <h2>Login</h2>
            <br />
            <fetcher.Form method="post">
                <input className="login-input" type="email" placeholder="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                {message && <p className="text-red-500">{message}</p>}
                <br />
                <button className="login-button" type="submit">Login</button>
            </fetcher.Form>
            <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        </>
    )
}
export { action };
export default Login;
