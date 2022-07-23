module.exports = (app) => {
	app.get('/', (req, res) => {
		let context = {
			"title": "Cassette Animation | codesyariah122",
			"header_text": "playing your sound",
			"footer_text": "Made with &hearts; by codesyariah122" 
		}
		res.render('index', context)
	})
}
