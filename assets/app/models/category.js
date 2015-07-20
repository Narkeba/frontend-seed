export default App.Model({
	title: App.Property({
		required: 'У категории должно быть название',
		minlength: {
			value: 3,
			message: 'Название категории не может быть меньше трех символов'
		}
	}),
	slug: App.Property()
});