import { useState } from "react";
import { Link, redirect, useFetcher } from "react-router";
import { getUsers } from "~/api/getApi";
import Login from "~/components/Login";
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
const login = () => {
    const fetcher = useFetcher();
    return (
        <Login fetcher={fetcher} />
    )
}
export { action };
export default login;
