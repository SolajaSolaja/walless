import HomeLayout from 'components/layouts/Home';
import EasyOnboarding from 'features/home/EasyOnboarding';
import EditTool from 'features/home/EditTool';
import ExtensionDownload from 'features/home/ExtensionDownload';
import HeadingSection from 'features/home/HeadingSection';

export const IndexPage = () => {
	return (
		<HomeLayout>
			<HeadingSection />
			<ExtensionDownload />
			<EasyOnboarding />
			<EditTool />
		</HomeLayout>
	);
};

export default IndexPage;
