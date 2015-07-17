import bootstrap from './bootstrap.js';
import page from './layers/page.js';
import widgets from './layers/widgets.js';
import sidebar from './layers/sidebar.js';
import options from './layers/options.js';

App.extend({
	defaults: {
		page: 'home',
		widgets: 'blog'
	}
});