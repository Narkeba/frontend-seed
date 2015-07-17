export default () => {
	App.View('Options', 'Pages', {
		init: function() {
			this.currentPage = blocks.observable(this.pages[0].slug);
		},
		pages: [
			{
				title: 'Главная',
				slug: 'home'
			},
			{
				title: 'Портфолио',
				slug: 'portfolio',
				sidebar: true
			}
		],
		changePage: function(e) {
			var page = blocks.context(e.target).$this;
			this.currentPage(page.slug);
		}
	});
}