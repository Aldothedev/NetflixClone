import { getQueriesForElement } from '@testing-library/react'
import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { Form } from '../components'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import * as ROUTES from '../constants/routes'

export default function SignIn() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = password === '' || emailAddress === ''

    const aStyle = {
        color: '#4583ff',
        textDecoration: 'none',
    };

    const handleSignin = (e) => {
        e.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input 
                            placeholder="Email or phone number" 
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                        <Form.Text>
                            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a style={aStyle} href="#">Learn more.</a>
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}