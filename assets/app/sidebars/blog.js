import Article from '../models/article.js';

var Articles = App.Collection(Article);
var articlesData = [
	{
		title: 'privet!',
		thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/71/Quebec_citadelles_200x200.png',
		description: 'My first article! Welcome!',
		category: 'code'
	},
	{
		title: 'poka!',
		thumbnail: 'http://i724.photobucket.com/albums/ww244/fourthoddysee/darthnevets.png',
		description: 'My last article! Bye Bye!',
		category: 'private'
	}
];

export default () => {
	App.View('Sidebar', 'Blog', {
		slug: 'blog',
		newArticle: Article(),
		articles: Articles(articlesData).extend('filter', function(value) {
			var category = App.Options.Categories.getCategory();
			return !category || value.category() != category.slug();
		}),
		changeArticle: function(e) {
			var article = blocks.context(e.target).$this;
			this.currentArticle = article;
		}
	});
}