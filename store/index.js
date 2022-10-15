import client from '~/plugins/contentful'

export const state = () => ({
	allPosts: null
})

export const mutations = {
	allPosts: (state, posts) => {
		state.allPosts = posts
	}
}

export const actions = {
	async allPosts({commit}){
		try {
			if (!client) return;
			const response = await client.getEntries({
				content_type: "blog",
				'order':'-sys.updatedAt',
				'limit': 100
			});
			console.log(response.items.length)
			if (response.items.length > 0) commit("allPosts", response.items);
		} catch (err) {
			console.error(err);
		}
	}
}