import { FC, ReactNode } from 'react';
import { Stack } from '@walless/ui';

import Sidebar from './Sidebar';

interface Props {
	children: ReactNode;
}

const ScreenContainer: FC<Props> = ({ children }) => {
	return (
		<Stack
			borderWidth={1}
			borderColor="#364654"
			borderRadius={10}
			backgroundColor="#0A1117"
			flexDirection="row"
			width={442}
		>
			<Sidebar />
			<Stack flex={1} alignItems="center">
				{children}
			</Stack>
		</Stack>
	);
};

export default ScreenContainer;