import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '@walless/app';
import { ExtensionDocument } from '@walless/store';
import { appState } from 'state/app';
import { extensionState } from 'state/extension';
import { useLocation, useParams, useSnapshot } from 'utils/hooks';
import { router } from 'utils/routing';

export const DashboardScreen: FC = () => {
	const { id: extensionId } = useParams<'id'>();
	const { pathname } = useLocation();
	const { profile } = useSnapshot(appState);
	const { map: extensionMap } = useSnapshot(extensionState);
	const extensions = Array.from(extensionMap.values());

	const getRouteActive = (item: ExtensionDocument) => {
		return `/${item._id}` === pathname || extensionId === item._id;
	};

	const handleExtensionPress = async (item: ExtensionDocument) => {
		await router.navigate(`/${item._id}`);
	};

	return (
		<DashboardLayout
			profile={profile}
			extensions={extensions}
			getIsExtensionActive={getRouteActive}
			onExtensionPress={handleExtensionPress}
		>
			<Outlet />
		</DashboardLayout>
	);
};

export default DashboardScreen;