import CustomAuth, { CustomAuthArgs, UX_MODE } from '@toruslabs/customauth';

const customAuthArgs: CustomAuthArgs = {
	uxMode: UX_MODE.REDIRECT,
	baseUrl: 'http://localhost:3001',
	redirectPathName: 'auth',
	network: 'testnet',
	enableLogging: true,
};

export const customAuth = new CustomAuth(customAuthArgs);