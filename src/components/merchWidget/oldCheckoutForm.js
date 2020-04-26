import React from 'react'
import styled from 'styled-components'

const StyledCheckoutForm = styled.div`
    display: flex;
    flex-flow: column wrap;
    input {
        margin: .5rem 0;
        padding: .5rem;
        border: 1px solid #e2e2e2;
        border-radius: .4em;
    }
`


export default class CheckoutForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName:  '',
            lastName:  '',
            emailAddress:  '',
            phoneNumber:  '',
            street:  '',
            city:  '',
            state:  '',
            zipCode:  ''
        }
        this.handleFormChange = this.handleFormChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFormChange(event) {
        console.log(`Target: ${event.target}`)
        console.log(`Target Name: ${event.target.name}`)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        console.log('Submit')
    }

    render() {
        return (
            <StyledCheckoutForm>
                <input
                    name='firstName'
                    value={this.state.firstName}
                    onChange={this.handleFormChange}
                    placeholder='First Name'
                />
                <input
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handleFormChange}
                    placeholder='Last Name'
                />
                <input
                    name='street'
                    value={this.state.street}
                    onChange={this.handleFormChange}
                    placeholder='Street'
                />
                <input
                    name='city'
                    value={this.state.city}
                    onChange={this.handleFormChange}
                    placeholder='City'
                />
                <input
                    name='state'
                    value={this.state.state}
                    onChange={this.handleFormChange}
                    placeholder='State'
                />
                <input
                    name='zipCode'
                    value={this.state.zipCode}
                    onChange={this.handleFormChange}
                    placeholder='Zip'
                />
                <input
                    name='emailAddress'
                    value={this.state.emailAddress}
                    onChange={this.handleFormChange}
                    placeholder='email'
                />
            </StyledCheckoutForm>
        )
    }
}