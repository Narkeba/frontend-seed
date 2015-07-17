export default () => {
	App.View('Page', 'Home', {
		slug: 'home',
		options: {
			route: '/'
		},
		contacts: {
			email: 'narkeba@gmail.com'
		},
		routed: function(r) {
			if (App.Options.Pages.currentPage() == this.slug) return;
			App.Options.Pages.currentPage(this.slug);
		}
	});
}