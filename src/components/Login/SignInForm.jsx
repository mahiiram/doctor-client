import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import './SignInForm.css';
import SignUp from './SignUp';

const SignInForm = () => {
    const [isSignUp, setSignUp] = useState(false);
    return (
        <div className={`${isSignUp ? "signin-signup-container sign-up-mode" : "signin-signup-container"}`}>
            <Link to="/">
                <span className="pageCloseBtn"><FaTimes /></span>
            </Link>
            <div className="forms-container">
                <div className="signIn-singUp">
                    {isSignUp ? (
                        <SignUp setSignUp={setSignUp} />
                    ) : (
                        <SignIn onSignUp={() => setSignUp(true)} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
