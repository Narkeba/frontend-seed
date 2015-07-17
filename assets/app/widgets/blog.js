import Article from '../models/article.js';

var Articles = App.Collection(Article);

export default () => {
	App.View('Sidebar', 'Blog', {
		slug: 'blog',
		newArticle: Article(),
		articles: Articles([
			{
				title: 'privet!',
				thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/71/Quebec_citadelles_200x200.png',
				description: 'My first article! Welcome!'
			},
			{
				title: 'poka!',
				thumbnail: 'http://i724.photobucket.com/albums/ww244/fourthoddysee/darthnevets.png',
				description: 'My last article! Bye Bye!'
			}
		]),
		keydown: (e) => {
			console.log(e);
		}
	});
}