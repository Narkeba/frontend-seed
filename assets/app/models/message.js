export default App.Model({
	author: App.Property({
		required: 'У сообщения должен быть автор'
	}),
	message: App.Property(),
	editing: blocks.observable(false),
	toggleEdit: function () {
		this.editing(!this.editing());
	},
	remove: function () {
		this.destroy(true);
	}
});