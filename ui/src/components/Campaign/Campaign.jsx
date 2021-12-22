import styles from './Campaign.module.css';

const Campaign = ({ campaign }) => {
	return (
		<div>
			<div className={styles.name}>{campaign.name}</div>
			<div className={styles.details}>{campaign.details}</div>
		</div>
	);
};

export default Campaign;
