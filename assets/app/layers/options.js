import blog from '../options/blog.js';

App.View('Options', {
	init: function() {
		this.currentOptions = App.Widgets.currentWidget
	}
});

blog();