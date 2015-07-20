import blog from '../sidebars/blog.js';
import chat from '../sidebars/chat.js';

App.View('Sidebar', {
	init: function() {
		this.getSidebar = App.Widgets.getWidget;
		this.currentSidebar.on('change', function(newWidget, oldWidget) {
			console.log(newWidget);
			if (!App.Widgets.getWidget().sidebar()) return false;
			console.log(App.Widgets.getWidget().sidebar());
		});
		if (App.Widgets.getWidget().sidebar()) {
			this.currentSidebar(App.Widgets.currentWidget);
		}
	},
	currentSidebar: blocks.observable(0)
});

blog();
chat();