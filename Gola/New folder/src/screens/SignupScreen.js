import React, { useState } from 'react';
import Signuppic from '../assets/3.jpg';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import {Link, useNavigate} from 'react-router-dom';

function SignupScreen() {
    const navigate = useNavigate();
    const backgroundImageStyle = {
        backgroundImage: `url(${Signuppic})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '60%', // 60% of the screen width
        height: '100%', // 100% of the screen height
    };

    // State variables for form input and error messages
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState(''); // Add confirm password state
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic email and password validation
        if (!email || !password || !username || !confirmpassword) {
            setErrorMessage('Please fill in all fields.');
        } else if (!isValidEmail(email)) {
            setErrorMessage('Invalid email format.');
        } else if (password !== confirmpassword) {
            setErrorMessage('Password and Confirm Password do not match.');
        } else {
            // Your authentication logic here
            // Redirect the user upon successful login
            // Replace the following line with your logic
            setSuccessMessage('You have successfully registered.');
            navigate('/'); // Redirect to HomeScreen
        }
    };

    // Function to check if the email format is valid
    const isValidEmail = (email) => {
        // Replace this with a more comprehensive email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 items-center my-2 md:mx-0 md:my-0">
            <div className="w-60 h-full" style={backgroundImageStyle}></div>
            <div className="w-full md:w-2/5 m-12 flex items-center justify-center">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Sign Up
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your details to Sign Up.
                    </Typography>
                    {successMessage && (
                        <div className="text-green-500 text-sm mt-2">{successMessage}</div>
                    )}
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                        <div className="mb-4 flex flex-col gap-6">
                            <Input
                                size="lg"
                                label="UserName"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                error={errorMessage && !username ? 'Name is required' : null}
                            />
                            <Input
                                size="lg"
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={errorMessage && !isValidEmail(email) ? 'Invalid email format' : null}
                            />
                            <Input
                                size="lg"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={errorMessage && !password ? 'Password is required' : null}
                            />
                            <Input
                                size="lg"
                                label="Confirm Password"
                                type="password"
                                value={confirmpassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                error={errorMessage && !confirmpassword ? 'Password is required' : null}
                            />
                        </div>
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        {errorMessage && (
                            <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
                        )}
                        <Button type="submit" className="mt-6" fullWidth>
                            Register
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Link to="/LoginScreen">
                                <a href="#" className="font-medium text-light-green-500">
                                    Sign In
                                </a>
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>
        </section>
    );
}

export default SignupScreen;
