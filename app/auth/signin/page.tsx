'use client';

import { Button } from '@carbon/react';
import { signIn } from 'next-auth/react';

const SignInPage = () => {
	return (
		<div>
			<Button onClick={() => signIn('appid')}>Sign In</Button>
		</div>
	);
};

export default SignInPage;
