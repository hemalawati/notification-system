const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

const notifications = [
	{
		id: 'n_id_01',
		campaignId: 'c_id_01',
		campaignUpdateId: 'u_id_01',
		title: 'INH has Paused',
		description:
			'Campaign has been temporarily paused. Any ads should be immediately paused.',
		organization: 'AA',
		timestamp: new Date(),
	},
	{
		id: 'n_id_02',
		campaignId: 'c_id_01',
		campaignUpdateId: 'u_id_02',
		title: 'INH has resumed',
		description: 'Campaign has resumed as of today.',
		organization: 'JI',
		timestamp: new Date(),
	},
	{
		id: 'n_id_03',
		campaignId: 'c_id_01',
		campaignUpdateId: 'u_id_01',
		title: 'INH has Paused',
		description:
			'Campaign has been temporarily paused. Any ads should be immediately paused.',
		organization: 'JI',
		timestamp: new Date(),
	},
];

const campaigns = [
	{
		id: 'c_id_01',
		createdDate: 'w',
		name: 'INH HAIR',
		organization: ['AA', 'JI'],
		details: 'ipsum lorem',
	},
	{
		id: 'c_id_02',
		createdDate: 'w',
		name: 'MLP SPA',
		organization: ['AA'],
		details: 'ipsum lorem',
	},
];

// CAMPAIGNS

app.get('/campaigns', (req, res) => {
	res.send(JSON.stringify(campaigns));
});
app.get('/campaigns/:id', (req, res) => {
	const campaign = campaigns.filter((c) => c.id === req.params.id);
	res.send(JSON.stringify(campaign));
});

// NOTIFICATIONS

app.get('/notifications', (req, res) => {
	res.send(JSON.stringify(notifications));
});

app.post('/notifications', (req, res) => {
	console.log('POST req: ' + req.body.description);
	// const notification = JSON.parse(req.body);
	const notification = req.body;
	notification.timestamp = new Date();

	notifications.push(notification);

	res.send(JSON.stringify(notification));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
