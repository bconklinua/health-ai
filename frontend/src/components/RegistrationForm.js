import React, { useState } from 'react';

function RegistrationForm() {
    console.log("RegistrationForm initialized");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState(''); // Track registration status message
    const [isRegistered, setIsRegistered] = useState(false); // Track if user registration is complete

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Check if passwords match
        if (password !== confirm_password) {
            setRegistrationStatus('Passwords do not match');
            return; // Exit the function early if passwords do not match
        }

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email, first_name, last_name }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Registration successful:', data);
                setIsRegistered(true); // Update registration status
                setRegistrationStatus(`Registration successful!`);
            } else {
                console.error('Registration failed:', data.error);
                setRegistrationStatus('Invalid Registration'); // Update registration status with error message
            }
        } catch (error) {
            console.error('Error:', error);
            setRegistrationStatus('An error occurred. Please try again.'); // Handle errors
        }
    };

    if (isRegistered) {
        return <div>{registrationStatus}</div>; // Render successful registration message
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
                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
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
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirm_password}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
            {registrationStatus && <div>{registrationStatus}</div>} {/* Conditionally render the login status message */}
        </form>
    );
}

export default RegistrationForm;
