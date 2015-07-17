import blog from '../widgets/blog.js';

App.View('Sidebar', {
	init: function() {
		this.currentSidebar = App.Widgets.currentWidget
	}
});

blog();