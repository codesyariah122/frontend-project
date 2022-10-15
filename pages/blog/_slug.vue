<style lang="scss">
	article {
		margin-bottom: 5rem;
		p{
			font-size: 18px;
			line-height: 31px;
			word-spacing: 3px;
			text-align: justify;
			white-space: pre-wrap;
			img{
				width: 100%;
			}
		}
	}
</style>
<template>
	<div>
		<b-jumbotron :header="post.fields.title" :lead="post.fields.description" :style="`background-image: url('https:${post.fields.photo.fields.file.url}'); color: #fff;`">
			<p>
				{{$moment(post.fields.createdAt).format("LLLL")}}
			</p>
			<b-button variant="primary" href="#">
				<b-avatar variant="info" :src="`https:${post.fields.authorBlog.fields.photo.fields.file.url}`"></b-avatar> {{post.fields.authorBlog.fields.authorName}}
			</b-button>
		</b-jumbotron>
		<b-container class="mt-5">
			<b-row class="justify-content-center">
				<b-col lg="12" sm="12">

				</b-col>

				<b-col lg="12" sm="12">
					<article v-html="$md.render(post.fields.body)"></article>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {
		name: 'blog-slug',

		data(){
			return {
				slug: this.$route.params.slug
			}
		},

		computed: {
			post(){
				let post = this.$store.state.allPosts.filter(el => el.fields.slug === this.slug)
				return post[0]
			}
		},

		head(){
			return {
				title: this.slug,
				meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.post.fields.title
				}
				]
			}
		}
	}
</script>