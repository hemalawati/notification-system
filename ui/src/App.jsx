import { useState, useEffect } from 'react';
import { BsBell } from 'react-icons/bs';
import { getNotifications } from './api.js';
import Notifications from './components/Notification/Notification.jsx';
import styles from './App.module.css';

const App = () => {
	const [notifications, setNotifications] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		getNotifications().then((notifications) => {
			//avoid duplicate notifications
			const uniqueNotifications = [
				...new Map(
					notifications?.data?.map((n) => [n['campaignUpdateId'], n])
				).values(),
			];

			//organizations that a user is member of
			const organizations = {};
			for (let index = 0; index < notifications?.data?.length; index++) {
				const notification = notifications.data[index];
				if (organizations[notification.campaignUpdateId]) {
					organizations[notification.campaignUpdateId].push(
						notification.organization
					);
				} else {
					organizations[notification.campaignUpdateId] = [
						notification.organization,
					];
				}
			}

			for (let index = 0; index < uniqueNotifications.length; index++) {
				uniqueNotifications[index].organization =
					organizations[uniqueNotifications[index].campaignUpdateId];
			}

			setNotifications(uniqueNotifications);
		});
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				{/*bell icon with count*/}
				<div className={styles.icon}>
					<BsBell size={25} onClick={() => setOpen(!open)} />
					<div className={styles.counter}>{notifications.length}</div>
				</div>

				{/*user name and budget*/}
				<div className={styles.user}>
					<div className={styles.userName}>Ian Elliott</div>
					<div className={styles.budget}>$68, 123.00</div>
				</div>
			</div>

			{/*notification component*/}
			{open && (
				<Notifications notifications={notifications} setOpen={setOpen} />
			)}
		</div>
	);
};

export default App;
