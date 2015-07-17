App.View('Widgets', {
	init: function() {
		var firstWidget = this.widgets[0];
		this.currentWidget = blocks.observable(firstWidget.slug);
	},
	widgets: [
		{
			title: 'Блог',
			slug: 'blog'
		},
		{
			title: 'Dordevic',
			slug: 'dordevic'
		},
		{
			title: 'Чат',
			slug: 'chat'
		}
	],
	changeSidebar: function(e) {
		var widget = blocks.context(e.target).$this;
		this.currentWidget(widget.slug);
	}
});