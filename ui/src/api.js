import axios from 'axios';

export const getNotifications = async () => {
	try {
		const notifications = await axios.get(`/notifications`);
		return notifications;
	} catch (error) {
		throw error;
	}
};

export const getCampaign = async (id) => {
	try {
		const campaign = await axios.get(`/campaigns/${id}`);
		return campaign;
	} catch (error) {
		throw error;
	}
};
