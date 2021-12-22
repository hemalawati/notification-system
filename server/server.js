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
		timestamp: Date.now(),
	},
	{
		id: 'n_id_02',
		campaignId: 'c_id_01',
		campaignUpdateId: 'u_id_02',
		title: 'INH has resumed',
		description: 'Campaign has resumed as of today.',
		organization: 'JI',
		timestamp: Date.now(),
	},
	{
		id: 'n_id_03',
		campaignId: 'c_id_01',
		campaignUpdateId: 'u_id_01',
		title: 'INH has Paused',
		description:
			'Campaign has been temporarily paused. Any ads should be immediately paused.',
		organization: 'JI',
		timestamp: Date.now(),
	},
	{
		id: 'n_id_04',
		campaignId: 'c_id_02',
		campaignUpdateId: 'u_id_03',
		title: 'MLP SPA closed',
		description: 'Campaign is closed today. Open at 10 am tomorrow.',
		organization: 'BA',
		timestamp: Date.now(),
	},
];

const campaigns = [
	{
		id: 'c_id_01',
		name: 'INH HAIR',
		organization: ['AA', 'JI'],
		details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula neque ligula, sit amet semper dui pulvinar a. Phasellus sollicitudin venenatis sapien id gravida. Maecenas felis neque, scelerisque vel fermentum sit amet, commodo a quam. Suspendisse maximus vel ipsum vel dignissim. Cras eget est ac erat ultrices tempus at imperdiet metus. Nullam feugiat neque quam, eu mollis eros vulputate vulputate. Praesent scelerisque dui nec mauris lobortis, et lobortis felis pellentesque. Mauris vehicula ultricies egestas.

		Vivamus sit amet neque iaculis, accumsan elit fringilla, cursus leo. Aliquam condimentum id quam vel tempus. Donec rutrum ipsum a viverra consectetur. Aliquam id neque massa. Vivamus sit amet neque tempus lectus fringilla interdum vel nec metus. Aliquam et odio tristique mi luctus pharetra eu sed orci. Nam eu eros eu tellus lacinia ultrices. Morbi egestas eu ligula nec gravida. Morbi eleifend sem metus, et ullamcorper nunc pharetra quis. Nullam viverra laoreet risus sit amet facilisis.
		
		In aliquam tortor nisi, ac lacinia risus venenatis sit amet. Morbi vitae congue sapien. Curabitur at nunc vel libero posuere gravida. Suspendisse sagittis vitae arcu ac auctor. Proin condimentum vitae tellus quis vehicula. Vivamus nulla ligula, maximus non mollis eget, tristique ut erat. Duis a eros risus. Proin maximus, sem ullamcorper mollis malesuada, diam nunc vestibulum felis, luctus condimentum magna metus non justo. Donec ullamcorper ligula id eros mollis malesuada. Integer diam erat, tempor sit amet quam sit amet, aliquet bibendum diam. Aenean vehicula placerat leo, sed tempus felis vehicula eu. Nunc ac malesuada tellus. Integer lorem sapien, pellentesque imperdiet varius eu, lacinia cursus purus. Ut eget ex euismod erat pretium mollis. Aenean at est sit amet libero condimentum pharetra quis et elit. Ut vulputate ante id velit dictum, sed pulvinar erat convallis.`,
	},
	{
		id: 'c_id_02',
		name: 'MLP SPA',
		organization: ['AA'],
		details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula neque ligula, sit amet semper dui pulvinar a. Phasellus sollicitudin venenatis sapien id gravida. Maecenas felis neque, scelerisque vel fermentum sit amet, commodo a quam. Suspendisse maximus vel ipsum vel dignissim. Cras eget est ac erat ultrices tempus at imperdiet metus. Nullam feugiat neque quam, eu mollis eros vulputate vulputate. Praesent scelerisque dui nec mauris lobortis, et lobortis felis pellentesque. Mauris vehicula ultricies egestas.

		Vivamus sit amet neque iaculis, accumsan elit fringilla, cursus leo. Aliquam condimentum id quam vel tempus. Donec rutrum ipsum a viverra consectetur. Aliquam id neque massa. Vivamus sit amet neque tempus lectus fringilla interdum vel nec metus. Aliquam et odio tristique mi luctus pharetra eu sed orci. Nam eu eros eu tellus lacinia ultrices. Morbi egestas eu ligula nec gravida. Morbi eleifend sem metus, et ullamcorper nunc pharetra quis. Nullam viverra laoreet risus sit amet facilisis.
		
		In aliquam tortor nisi, ac lacinia risus venenatis sit amet. Morbi vitae congue sapien. Curabitur at nunc vel libero posuere gravida. Suspendisse sagittis vitae arcu ac auctor. Proin condimentum vitae tellus quis vehicula. Vivamus nulla ligula, maximus non mollis eget, tristique ut erat. Duis a eros risus. Proin maximus, sem ullamcorper mollis malesuada, diam nunc vestibulum felis, luctus condimentum magna metus non justo. Donec ullamcorper ligula id eros mollis malesuada. Integer diam erat, tempor sit amet quam sit amet, aliquet bibendum diam. Aenean vehicula placerat leo, sed tempus felis vehicula eu. Nunc ac malesuada tellus. Integer lorem sapien, pellentesque imperdiet varius eu, lacinia cursus purus. Ut eget ex euismod erat pretium mollis. Aenean at est sit amet libero condimentum pharetra quis et elit. Ut vulputate ante id velit dictum, sed pulvinar erat convallis.`,
	},
];

// CAMPAIGNS

app.get('/campaigns', (req, res) => {
	res.send(JSON.stringify(campaigns));
});
app.get('/campaigns/:id', (req, res) => {
	const campaign = campaigns.filter((c) => c.id === req.params.id)[0];
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
