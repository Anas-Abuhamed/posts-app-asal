import { useState } from "react";
import { NavLink } from "react-router";

const Dashboard = ({ fetcher }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    return (
        <>
            <nav>
                <h2>Dashboard</h2>
                <div>
                    <NavLink to={"/dashboard"} style={({ isActive }) => ({ color: isActive ? "green" : "red", marginRight: "5px" })}>Posts</NavLink>
                    <NavLink to={"/dashboard/myposts"} style={({ isActive }) => ({ color: isActive ? "green" : "red" })}>My Posts</NavLink>
                </div>
                <NavLink to={"/logout"}>Logout</NavLink>
            </nav>
            <h3>Add post</h3>
            <fetcher.Form action="/dashboard" method="post">
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <input type="text" name="body" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" required />
                <button type="submit">Add Post</button>
            </fetcher.Form>
            {fetcher.data?.id && <p className="success">Post added successfully!</p>}
            <br />

        </>
    )
}

export default Dashboard;
