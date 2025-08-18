import { useState } from "react";
import { NavLink } from "react-router";

const Dashboard = ({ fetcher }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    return (
        <>
            <nav className="navbar">
                <h2>Dashboard</h2>
                <div className="nav-links">
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
                        Posts
                    </NavLink>
                    <NavLink to="/dashboard/myposts" className={({ isActive }) => isActive ? "active" : ""}>
                        My Posts
                    </NavLink>
                </div>
                <fetcher.Form action="/dashboard" method="post">
                    <input type="hidden" name="logout" value="1" />
                    <button type="submit" className="logout-button">Logout</button>
                </fetcher.Form>
            </nav>

            <h3 style={{ textAlign: "center", marginTop: "2rem" }}>Add Post</h3>
            <fetcher.Form action="/dashboard" method="post" className="dashboard-form">
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <input
                    type="text"
                    name="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Body"
                    required
                />
                <button type="submit">Add Post</button>
            </fetcher.Form>

            {fetcher.data?.id && <p className="success">Post added successfully!</p>}
        </>
    );
};

export default Dashboard;
