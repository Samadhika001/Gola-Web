import React, { Component } from 'react'
import UserDetails from './UserDetails'
import BusinessDetails from './BusinessDetails'
import Success from './Success'

export default class ServiceReg1 extends Component {

    state = {
        step: 1,
        email: '',
        username: '',
        ownerName: '',
        password: '',
        confirmPassword: '',
        businessName: '',
        telephone: '',
        district: '',
        address: '',
        city: '',
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { email,

            username,
            ownerName,
            password,
            confirmPassword,
            businessName,
            telephone,
            type,
            address,
            city} = this.state;
        const values = { email,
            username,
            ownerName,
            password,
            confirmPassword,
            businessName,
            telephone,
            type,
            address,
            city }

        switch(step) {
            case 1:
                return (
                    <UserDetails
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 2:
                return (
                    <BusinessDetails
                        prevStep={ this.prevStep }
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            default:
            // do nothing
        }
    }
}
