import categories from '../options/categories.js';
import profile from '../options/profile.js';
import pages from '../options/pages.js';

App.View('Options', {
	init: function() {
		this.currentOptions = App.Widgets.getWidget;
	}
});

categories();
profile();
pages();