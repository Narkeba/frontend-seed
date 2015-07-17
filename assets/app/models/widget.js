export default App.Model({
	title: App.Property({
		required: 'У виджета должен быть заголовок'
	}),
	slug: App.Property(),
	sidebar: blocks.observable(true),
	options: blocks.observable(true),
	editing: blocks.observable(false),
	toggleEdit: function () {
		this.editing(!this.editing());
	},
	remove: function () {
		this.destroy(true);
	}
});