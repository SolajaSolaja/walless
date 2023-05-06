import { type FC } from 'react';
import {
	type CardSkin,
	MainFeatures,
	SlideHandler,
	TabsHeader,
	WalletCard,
} from '@walless/app';
import { Networks } from '@walless/core';
import { TokenRecord } from '@walless/storage';
import { Stack } from '@walless/ui';
import { showReceiveModal } from 'state/app/modal';
import { usePublicKeys } from 'utils/hooks';

import EmptyTab from './EmptyTab';
import { layoutTabs } from './shared';

interface Props {
	variant?: string;
}

export const SuiDashboard: FC<Props> = () => {
	const keys = usePublicKeys(Networks.sui);
	const address = keys[0]?._id as string;
	const token: TokenRecord = {
		id: address,
		network: Networks.sui,
		metadata: { symbol: 'SOL' },
		account: { balance: '0', decimals: 9 },
	};
	const cloneCard = (card: TokenRecord, suffix: string) => ({
		...card,
		id: card.id + suffix,
	});
	const cards = token?.id
		? [token, cloneCard(token, 'asdofi'), cloneCard(token, 'asdfklasjfdl')]
		: [];

	return (
		<Stack flex={1} padding={12} gap={18}>
			<Stack horizontal gap={12}>
				{cards.map((token, index) => {
					return (
						<WalletCard
							key={index}
							index={index}
							skin={suiCardSkin}
							token={token}
						/>
					);
				})}
			</Stack>
			<Stack alignItems="center" gap={18}>
				<MainFeatures onReceivePress={() => showReceiveModal(Networks.sui)} />
				<SlideHandler items={cards} activeItem={cards[0]} />
			</Stack>
			<Stack>
				<TabsHeader items={layoutTabs} activeItem={layoutTabs[0]} />
				<EmptyTab />
			</Stack>
		</Stack>
	);
};

export default SuiDashboard;

const suiCardSkin: CardSkin = {
	backgroundSrc: { uri: '/img/network/sky-card-bg.png' },
	largeIconSrc: { uri: '/img/network/sui-icon-lg.png' },
	iconSrc: { uri: '/img/network/sui-icon-sm.png' },
	iconColor: '#FFFFFF',
	iconSize: 12,
};