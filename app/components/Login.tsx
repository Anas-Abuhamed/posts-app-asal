import React, { useState } from 'react'
import { Link } from 'react-router';

export default function Login({ fetcher }) {
    const [email, setEmail] = useState("");
    const message = fetcher.data?.message;
    return (
        <>
            <div className="login-form">
                <h2 className="form-header">Login</h2>

                <fetcher.Form method="post" className="form-body">
                    <input
                        className="form-input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button className="form-button" type="submit">
                        Login
                    </button>

                    {message && <p className="form-error">{message}</p>}
                </fetcher.Form>

                <p className="form-footer">
                    Don't have an account?{" "}
                    <Link to="/register" className="form-link">
                        Register
                    </Link>
                </p>
            </div>

        </>
    )
}
