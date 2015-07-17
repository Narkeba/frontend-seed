import blog from '../sidebars/blog.js';
import chat from '../sidebars/chat.js';

App.View('Sidebar', {
	init: function() {
		this.currentSidebar = App.Widgets.getWidget;
	}
});

blog();
chat();