import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components/macro";

type FormState = {
    name: string;
    email: string;
};

const Input = styled.input`
    padding: 0.5rem;
    border-radius: 6px;
`;

export const MailChimpForm = () => {
    const initialFormState = {
        email: "",
        name: ""
    };

    const [formState, setFormState] = useState<FormState>(initialFormState);

    const submitForm = async (e: FormEvent) => {
        e.preventDefault();

        const payload = {
            merge_fields: {
                FNAME: formState.name
            },
            email_address: formState.email
        };

        const response = await fetch("/api/subscribe", {
            method: "POST",
            body: JSON.stringify(payload)
        });
    
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form action="" method="POST" onSubmit={submitForm}>
            <div>
                <label htmlFor="firstName">First Name *</label>
                <Input type="text" name="firstName" id="firstName" placeholder="First Name" required />
            </div>
            <div>
                <label htmlFor="email">Email *</label>
                <Input
                    onChange={handleInputChange}
                    value={formState.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                />
            </div>
            <button>Submit</button>
        </form>
    );
};
