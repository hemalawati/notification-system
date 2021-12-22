import { useState, useEffect } from 'react';
import { BsBell } from 'react-icons/bs';
import { getNotifications } from './api.js';
import Notifications from './components/Notification/Notification.jsx';
import styles from './App.module.css';

const App = () => {
	const [notifications, setNotifications] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		getNotifications().then(notifications => {
			//avoids duplicate notifications
			const uniqueNotifications = [...new Map(notifications?.data?.map(n =>
				[n['campaignUpdateId'], n])).values()];
			setNotifications(uniqueNotifications);
		});
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				{/*bell icon with count*/}
				<div className={styles.icon}>
					<BsBell size={25} onClick={() => setOpen(!open)} />
					<div className={styles.counter}>5</div>
				</div>

				{/*user name and budget*/}
				<div className={styles.user}>
					<div className={styles.userName}>Ian Elliott</div>
					<div className={styles.budget}>$68, 123.00</div>
				</div>
			</div>

			{/*notification component*/}
			{open && <Notifications notifications={notifications}/>}
		</div>
	);
};

export default App;
