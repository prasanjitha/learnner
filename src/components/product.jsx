import Joi from "joi-browser";
import React, { Component } from 'react';
import Input from './common/input';

class Product extends Component {
    state = {
        account: { username: '', password: '' },
        errors: {}
    }
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    }
    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.account, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    }
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
    }
    validateProprty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessagge = this.validateProprty(input);
        if (errorMessagge) errors[input.name] = errorMessagge;
        else delete errors[input.name];

        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account, errors });

    }
    handleClick = () => {
        console.log(this.state.account);
    }



    render() {
        const { account, errors } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        error={errors.username}
                        name='username'
                        value={account.username}
                        label="UserName"
                        onChange={this.handleChange}
                    />
                    <Input
                        error={errors.password}

                        name='password'
                        value={account.password}
                        label="Password"
                        onChange={this.handleChange}
                    />
                    <button
                        disabled={this.validate()}
                        className='btn btn-primary' onClick={this.handleClick}>Login</button>
                </form>
            </div>

        );
    }
}

export default Product;