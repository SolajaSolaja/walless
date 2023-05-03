import { MainFeatures } from '@walless/app';
import { Networks } from '@walless/core';
import { AnimateDirections, BindDirections, modalActions } from '@walless/gui';
import { Stack } from '@walless/ui';
import { showReceiveModal } from 'state/app/modal';

import Collectibles from './components/Collectibles';
import History from './components/History';
import TokenValue from './components/TokenValue';
import Widgets from './components/Widgets';
import SendTokenScreen from './modals/SendToken';

const ProfileScreen = () => {
	const handleSend = () => {
		modalActions.show({
			id: 'send-token',
			bindingDirection: BindDirections.InnerBottom,
			component: SendTokenScreen,
			animateDirection: AnimateDirections.Top,
		});
	};

	return (
		<Stack
			maxHeight="100vh"
			paddingHorizontal={14}
			paddingVertical={16}
			alignItems="center"
			gap={36}
		>
			<Stack alignSelf="flex-end" marginBottom={-12}>
				<Widgets />
			</Stack>

			<TokenValue />

			<MainFeatures
				onSendPress={handleSend}
				onReceivePress={() => showReceiveModal(Networks.sui)}
			/>

			<Collectibles />

			<History />
		</Stack>
	);
};

export default ProfileScreen;
