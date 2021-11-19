import React, { useContext, useState } from 'react';
import './MakeAdmin.css'
import { Form, Container, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import ToyButton from '../../../components/ToyButton/ToyButton';


const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://toys-hub.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div style={{ textAlign: "center" }}>
            <Form onSubmit={handleAdminSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" onBlur={handleOnBlur} required />
                </FloatingLabel>
                <ToyButton
                    color="white"
                    size="lg"
                    type="submit"
                >
                    Make Admin
                </ToyButton>

            </Form>
            {success && (window.confirm("Made Admin Successfully !!!"))}

        </div>
    );
};

export default MakeAdmin;