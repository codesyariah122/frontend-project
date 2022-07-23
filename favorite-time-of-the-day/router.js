export const webRouter = (app) => {
	app.use('/', (req, res) => {
		let context = {
			"title": "Favorite time | codesyariah122",
			"header_text": "Favorite time of the day",
			"footer_text": "Made with &hearts; by codesyariah122" 
		}
		res.render('index', context)
	})
}
