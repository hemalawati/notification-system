// import { useState, useEffect } from 'react';
import { FcSpeaker } from 'react-icons/fc';
import { getCampaign } from '../../api';
import styles from './Notification.module.css';

const Notifications = ({ notifications }) => {
	// const [campaign, setCampaign] = useState({});
	// const [campaignId, setCampaignId] = useState();

	// useEffect(() => {
	// 	getCampaign(campaignId).then(campaign => {
	// 		setCampaign(campaign);
	// 	})
	// }, []);

	const showCampaign = (campaignId) => {
		getCampaign(campaignId).then((campaign) => {
			// stCampaign(campaign);
			console.log('campaign', campaign);
		});
	};

	return (
		<>
			<div className={styles.notifications}>
				<div className={styles.newNotifications}>
					<div className={styles.new}>NEW</div>
					{notifications?.map((notification, index) => (
						<div
							className={styles.notification}
							key={index}
							onClick={() => showCampaign(notification.campaignId)}
						>
							<div className={styles.title}>
								<FcSpeaker /> {notification.title}
							</div>
							<div className={styles.description}>
								{notification.description}
							</div>
						</div>
					))}
					<span className={styles.notification}>hello from notification</span>
				</div>
				<div className={styles.prevNotifications}>
					<div className={styles.previous}>PREVIOUS</div>
					<span className={styles.notification}>
						hello from notification hello from notification
					</span>
					<span className={styles.notification}>hello from notification</span>
				</div>
			</div>
		</>
	);
};

export default Notifications;
