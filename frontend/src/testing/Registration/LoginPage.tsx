import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    function handleSubmit(event) {
        event.preventDefault();
        onLogin({ username, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
        );
}

export default LoginPage;