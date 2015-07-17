export default () => {
	App.View('Page', 'Home', {
		options: {
			route: '/'
		},
		contacts: {
			email: 'narkeba@gmail.com'
		},
		routed: function(r) {
			console.log(App.Page.Home);
		}
	});
}