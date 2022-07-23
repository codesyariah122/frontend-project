export const webRouter = (app) => {
	app.get('/', (req, res) => {
		let context = {
			"title": "Parallax Animation | codesyariah122",
			"header_text": "Favorite time of the day",
			"footer_text": "Made with &hearts; by codesyariah122" 
		}
		res.render('pages/index', context)
	})
}
