<template>
	<b-container class="mt-5">
		<b-row class="justify-content-center">
			<b-col lg="12" sm="12">
				<h1>Blog Lists : </h1>
			</b-col>
		</b-row>

		<b-row class="justify-content-start mt-3 mb-5">
			<b-col v-for="post in allposts" lg="6" sm="12" :key="post.id">
				<b-card no-body class="overflow-hidden" style="max-width: 100%;">
					<b-row no-gutters>
						<b-col md="6">
							<b-card-img :src="post.fields.photo.fields.file.url" alt="Image" class="rounded-0"></b-card-img>
						</b-col>
						<b-col md="6">
							<b-card-body :title="post.fields.title">
								<small class="text-secondary"> {{$moment(post.fields.createdAt).format("LLLL")}} </small>
								<b-card-text class="mt-3">
									{{post.fields.description}}
								</b-card-text>

								<nuxt-link class="btn rounded-pill btn-primary btn-block" :to="{
									name: 'blog-slug',
									params: {
										slug: post.fields.slug
									}
								}">
									Read More
								</nuxt-link>
							</b-card-body>
						</b-col>
					</b-row>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		computed: {
			allposts(){
				return this.$store.state.allPosts
			}
		}
	}
</script>