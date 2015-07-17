export default App.Model({
	title: App.Property({
		required: 'Заголовок не может быть пустым',
		minlength: {
			value: 3,
			message: 'Заголовок не может быть меньше трех символов'
		}
	}),
	category: App.Property(),
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