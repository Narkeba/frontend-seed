import Article from '../models/article.js';

export default () => {
	App.View('Page', 'Article', {
		article: Article,
		options: {
			route: blocks.route('Blog/{{slug}}').optional('slug')
		},
		routed: function(r) {
			if (App.Options.Pages.currentPage() == this.slug) return;
			App.Options.Pages.currentPage(this.slug);
		}
	});
}