import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInUpPageContainer } from './sign-in-and-sign-up.styles.jsx';

const SignInAndSignUpPage = () => (
    <SignInUpPageContainer>
        <SignIn />
        <SignUp />
    </SignInUpPageContainer>
)

export default SignInAndSignUpPage;