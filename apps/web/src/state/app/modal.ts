import { type FC } from 'react';
import { NotificationModal } from '@walless/app';
import { type Networks } from '@walless/core';
import {
	type ModalConfigs,
	AnimateDirections,
	BindDirections,
	modalActions,
} from '@walless/gui';
import ReceiveTokenScreen from 'screens/Profile/modals/ReceiveToken';
import SendModal from 'screens/Profile/modals/SendModal';

export const showReceiveModal = (layoutNetWork: Networks) => {
	modalActions.show({
		id: 'receive-token',
		bindingDirection: BindDirections.InnerBottom,
		component: ReceiveTokenScreen,
		animateDirection: AnimateDirections.Top,
		context: {
			network: layoutNetWork,
		},
	});
};

export const showSendModal = (layoutNetwork?: Networks) => {
	modalActions.show({
		id: 'send-token',
		bindingDirection: BindDirections.InnerBottom,
		component: SendModal,
		animateDirection: AnimateDirections.Top,
		context: {
			layoutNetwork,
		},
	});
};

export const notify = (
	id: string,
	content: {
		prefix?: FC;
		message: string;
		suffix?: FC;
	},
	modalConfig?: Omit<ModalConfigs, 'component' | 'context'>,
	time?: 'none' | number,
) => {
	const _id = `notify-${id}`;
	const { prefix, message, suffix } = content;

	modalActions.show({
		id: _id,
		component: NotificationModal,
		maskActiveOpacity: 0,
		bindingDirection: BindDirections.InnerTop,
		positionOffset: { y: 20 },
		...modalConfig,
		context: {
			prefix,
			message,
			suffix,
		},
	});

	if (time !== 'none') {
		setTimeout(() => {
			modalActions.hide(_id);
		}, time || 1000);
	}
};
