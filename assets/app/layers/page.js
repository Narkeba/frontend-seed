import home from '../pages/home.js';
import article from '../pages/article.js';

App.View('Page', {
	init: function() {
		this.currentPage = App.Options.Pages.currentPage;
	}
});

home();
article();