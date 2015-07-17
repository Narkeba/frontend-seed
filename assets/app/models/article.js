export default App.Model({
	title: App.Property(),
	thumbnail: App.Property(),
	description: App.Property(),
	editing: blocks.observable(false),
	toggleEdit: function () {
		this.editing(!this.editing());
	},
	remove: function () {
		this.destroy(true);
	}
});