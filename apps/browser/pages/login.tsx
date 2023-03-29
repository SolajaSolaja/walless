import React from 'react';
import { Button, Stack, Text, YStack } from '@walless/wui';
import { useRouter } from 'next/router';

export const Login: React.FC = () => {
	const router = useRouter();

	return (
		<YStack flex={1} alignItems="center" justifyContent="center">
			<Stack
				maxWidth={410}
				maxHeight={600}
				alignItems="center"
				justifyContent="center"
			>
				<Text>Login</Text>
				<Button onPress={() => router.push('/passcode/initialize')}>
					Press to login
				</Button>
			</Stack>
		</YStack>
	);
};

export default Login;
