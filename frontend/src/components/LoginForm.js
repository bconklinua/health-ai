import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(''); // Track login status message
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
                setIsLoggedIn(true); // Update login status
                setLoginStatus(`Login successful. Welcome, ${username}!`);
            } else {
                console.error('Login failed:', data.error);
                setLoginStatus('Wrong username/password'); // Update login status with error message
            }
        } catch (error) {
            console.error('Error:', error);
            setLoginStatus('An error occurred. Please try again.'); // Handle errors
        }
    };

    if (isLoggedIn) {
        return <div>{loginStatus}</div>; // Render successful login message
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
            {loginStatus && <div>{loginStatus}</div>} {/* Conditionally render the login status message */}
        </form>
    );
}

export default LoginForm;
