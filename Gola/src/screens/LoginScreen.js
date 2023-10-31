import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loginpic from '../assets/2.jpg';
import { Link } from 'react-router-dom';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Radio,
} from "@material-tailwind/react";

function LoginScreen() {
    const navigate = useNavigate();
    const backgroundImageStyle = {
        backgroundImage: `url(${Loginpic})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '60%', // 60% of the screen width
        height: '100%', // 100% of the screen height
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // State to track the selected role
    const [selectedRole, setSelectedRole] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Redirect based on the selected role
        if (selectedRole === 'service_provider') {
            navigate('/SpDashboard');
        } else if (selectedRole === 'traveler') {
            navigate('/TrHome');
        }
    };

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 items-center my-2 md:mx-0 md:my-0">
            <div className="w-60 h-full" style={backgroundImageStyle}></div>
            <div className="w-full md:w-2/5 m-12 flex items-center justify-center">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Sign In
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your details to Sign In.
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                        <div className="mb-4 flex flex-col gap-6">

                            <Input size="lg" type="email" label="Email" />
                            <Input size="lg" type="password" label="Password" />
                            <div className="flex items-center">
                                <div className="ml-4 flex items-center space-x-4">

                                        <Radio
                                            name="role"
                                            value="service_provider"
                                            label="Service Provider"
                                            onChange={() => setSelectedRole('service_provider')}
                                        />
                                        <Radio
                                            name="role"
                                            value="traveler"
                                            label="Traveler"
                                            onChange={() => setSelectedRole('traveler')}
                                        />
                                </div>
                            </div>
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
                        <Button type="submit" className="mt-6" fullWidth>
                            Login
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Don't have an account?{" "}
                            <Link to="/ChooseTypeScreen">
                            <a href="#" className="font-medium text-light-green-500">
                                Sign Up
                            </a>
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>
        </section>
    );
}

export default LoginScreen;
