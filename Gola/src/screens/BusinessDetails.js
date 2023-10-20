import React, { useState } from 'react';
import Signuppic from '../assets/3.jpg';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Stepper, Step, Alert,
} from "@material-tailwind/react";
import {Link, useNavigate} from 'react-router-dom';

const BusinessDetails = ({ nextStep, prevStep, handleChange, values }) => {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const Continue = e => {
        e.preventDefault();
        setShowSuccessAlert(true);
    }
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const backgroundImageStyle = {
        backgroundImage: `url(${Signuppic})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '60%', // 60% of the screen width
        height: '100%', // 100% of the screen height
    };
    function Icon() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
            >
                <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }

    const Success = () => {
        if (!showSuccessAlert) {
            return null; // Don't render the Success alert if showSuccessAlert is false
        }
        return (
            <Alert
                icon={<Icon />}
                className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
            >
                You have Successfully <br/> Create Your Account.
            </Alert>
        );
    }
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 items-center my-2 md:mx-0 md:my-0">
            <div className="w-60 h-full" style={backgroundImageStyle}></div>
            <div className="w-full md:w-2/5 m-12 flex items-center justify-center">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Sign Up
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your Business details to Create Account.
                    </Typography>
                    <Success />
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
                        <div className="mb-4 flex flex-col gap-6">
                            <Input
                                size="lg"
                                label="Business Name"
                                type="text"
                                onChange={handleChange('businessName')}
                                defaultValue={values.businessName}

                            />
                            <Input
                                size="lg"
                                label="Business Phone No."
                                type="tel"
                                onChange={handleChange(' telephone')}
                                defaultValue={values. telephone}
                            />
                            <Input
                                size="lg"
                                label="Business Type"
                                type="text"
                                onChange={handleChange('type')}
                                defaultValue={values.type}
                            />
                            <Input
                                size="lg"
                                label="Business Address"
                                type="text"
                                onChange={handleChange('address')}
                                defaultValue={values.address}
                                autoComplete="address"
                            />
                        </div>
                        <div className="mt-16 flex justify-between gap-4">
                            <Button onClick={Previous} type="submit" className="mt-6" fullWidth>
                               Prev
                            </Button>
                            <Button onClick={Continue} type="submit" className="mt-6" fullWidth>
                                Next
                            </Button>
                        </div>

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

export default BusinessDetails;
