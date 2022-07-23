module.exports = (app) => {
	app.get('/', (req, res) => {
		let data = {
			"title": "Cassette Animation | codesyariah122"
		}

		res.render('index', data)
	})
}
