// import { useState } from 'react';
import { FcSpeaker } from 'react-icons/fc';
import styles from './Notification.module.css';
import moment from 'moment';

const Notifications = ({
	notifications,
	setCampaignId,
	setCampaignUpdateId,
}) => {
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
								setCampaignId(
									notification.campaignId,
									setCampaignUpdateId(notification.campaignUpdateId)
								)
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
				</div>
			</div>
		</>
	);
};

export default Notifications;
