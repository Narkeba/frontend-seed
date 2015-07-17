import Widget from '../models/widget.js';

var Widgets = App.Collection(Widget);
var widgetsData = [
	{
		title: 'Блог',
		slug: 'blog'
	},
	{
		title: 'Dordevic',
		slug: 'dordevic',
		sidebar: false
	},
	{
		title: 'Чат',
		slug: 'chat'
	}
];

App.View('Widgets', {
	widgets: Widgets(widgetsData),
	currentWidget: blocks.observable(0),
	getWidget: blocks.observable(function() {
		return this.widgets()[this.currentWidget]
	}),
	changeWidget: function(e, widgetIndex) {
		this.currentWidget(widgetIndex);
	}
});