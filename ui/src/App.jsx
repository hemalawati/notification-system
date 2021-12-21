import { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import Notifications from './components/Notification.jsx';
import styles from './App.module.css';

const App = () => {
	const [open, setOpen] = useState(false);


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
			{open && <Notifications />}
		</div>
	);
};

export default App;
