import { type PopupType } from '@walless/messaging';

export const openPopup = async (popupType: PopupType, requestId: string) => {
	return await chrome.windows.create({
		type: 'popup',
		width: 410,
		height: 600,
		url: `popup.html/#/${popupType}/${requestId}`,
		focused: true,
	});
};

export const closePopup = (popupId: number) => {
	chrome.windows.remove(popupId);
};
