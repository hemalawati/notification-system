import styles from './Notification.module.css';

const Notifications = () => {
	return (
		<div className={styles.notifications}>
			<div className={styles.newNotifications}>
				<div className={styles.new}>NEW</div>
				<span className={styles.notification}>
					hello from notification hello from notification
				</span>
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
	);
};

export default Notifications;
