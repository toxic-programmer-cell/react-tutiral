import { useState } from 'react';

export const FormHandling = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [formSubmited, setFormSubmited] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmited(true);
    }
    return (
        <div>
            <br />
            <h1 style={{color:'red'}}>Form Handling</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <input type='text' placeHolder='Name' value={name} onChange={handleName} />
                <input type='email' placeHolder='Email' value={email} onChange={handleEmail} />
                <button type='submit'>Submit</button>
            </form>
            {formSubmited &&
                <ul>
                    <br />
                    <h3>Submited output</h3>
                    <li>Name: {name}</li>
                    <li>Email: {email}</li>
                </ul>
            }
        </div>
    )
}