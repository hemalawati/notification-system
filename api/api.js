const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(
	jsonServer.rewriter({
		'/api/*': '/$1',
	})
);

const campaigns = [{"id": "1", "createdDate": "w", "name": "campaignM100", "organization":"orgA", "details": "ipsum lorem"},
{"id": "2", "createdDate": "w", "name": "campaignM200", "organization":"orgB", "details": "ipsum lorem"}];
server.get('/campaigns', (req, res) => {
	res.send(JSON.stringify(campaigns));
});
server.get('/campaigns/:id', (req, res) => {
    const campaign = campaigns.filter(c => c.id === req.params.id) ;
	res.send(JSON.stringify(campaign));
});


const notifications = [{"id": 1, "campaingnId": 1, "title": "ntoification1","description": "ipsum lorem", "organization":"orgA", "timestamp": "" }];
server.get('/notifications', (req, res) => {
	res.send(JSON.stringify(notifications));
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(5000, () => {
	console.log('JSON Server is running');
});
