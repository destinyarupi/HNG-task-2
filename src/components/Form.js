import React from 'react'
import { useState } from 'react';

function Form() {

    const name = "Destiny Arupi"

    const [formData, setFormData] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        textarea: "",
        checked: false
    })

    const handleChange = event => {
        const {name, value, type, checked} = event.target
        setFormData ( prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked: value
            }
        })
    } 

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="header pt-3">
                <h1 className='py-2'>Contact Me</h1>
                <p className='pb-4'>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <div className="row">
                {/* First Name input */}
                <div className='col-md mb-3'>
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        id='first_name' 
                        className="form-control" 
                        placeholder='Enter your first name'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Last Name input */}
                <div className='col-md mb-3'>
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        id='last_name' 
                        className="form-control" 
                        placeholder='Enter your last name'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            {/* Email input */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                    type="email" 
                    id='email'
                    className="form-control" 
                    placeholder='yourname@email.com'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Message input */}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example3">Message</label>
                <textarea 
                    className="form-control" 
                    id="message" 
                    rows="4" 
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                    name='textarea'
                    value={formData.textarea}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* checkbox */}
            <div className="mb-5 form-check">
                <input 
                    type="checkbox" 
                    className="form-check-input pe-3"
                    id='checkbox'
                    name='checked'
                    checked={formData.checked}
                    onChange={handleChange}
                    required
                />
                <label className="form-check-label checkbox" htmlFor="checkbox">You agree to providing your data to {name} who may contact you.</label>
            </div>

            {/* Submit Button */}
            <div className='d-grid mb-5 pb-5'>
                <button type="submit" className="btn btn-primary mb-5" id="btn__submit">Send message</button>
            </div>
        </form>
    )
}

export default Form