import { PublicKey } from '@solana/web3.js';
import { Networks } from '@walless/core';
import { getTokenMetadata, getTokensByOwner } from '@walless/network';
import { TokenDocument } from '@walless/store';

import { connection } from './internal';

export const fetchSolanaTokens = async (address: string) => {
	const publicKey = new PublicKey(address);
	const tokenAccounts = await getTokensByOwner(connection, publicKey);
	const documentPromises = tokenAccounts.map(async ({ account, pubkey }) => {
		const mint = account.data.mint.toString();
		const metadata = await getTokenMetadata(connection, account.data.mint);

		return {
			_id: `${address}/${mint}`,
			network: Networks.solana,
			type: 'Token',
			account: {
				address,
				mint,
				balance: account.data.amount.toString(),
			},
			metadata: {
				name: metadata?.data.name,
				symbol: metadata?.data.symbol,
				imageUri: metadata?.data.uri,
				sellerFeeBasisPoints: metadata?.data.sellerFeeBasisPoints,
			},
		} as TokenDocument;
	});

	return await Promise.all(documentPromises);
};
