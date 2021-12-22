import { useState } from 'react';
import { FcSpeaker } from 'react-icons/fc';
import { getCampaign } from '../../api';
import styles from './Notification.module.css';
import moment from 'moment';
import Campaign from '../Campaign/Campaign';

const Notifications = ({ notifications, setOpen }) => {
	const [campaign, setCampaign] = useState({});
	const [openCampaign, setOpenCampaign] = useState(false);

	const showCampaign = (campaignId) => {
		getCampaign(campaignId).then((campaignAd) => {
			setCampaign(campaignAd?.data);
			setOpen(false);
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
							onClick={() =>
								showCampaign(notification.campaignId, setOpenCampaign(true))
							}
						>
							<div className={styles.titleTime}>
								<FcSpeaker />
								<div className={styles.title}>{notification.title}</div>
								<div className={styles.time}>
									{moment(notification.timestamp).fromNow()}
								</div>
							</div>
							<div className={styles.description}>
								{notification.description}
							</div>
							<div className={styles.organizationList}>
								<span className={styles.label}>Organinzations</span>
								{notification?.organization?.map((o, i) => (
									<div className={styles.organization} key={i}>
										{o}
									</div>
								))}
							</div>
						</div>
					))}
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
