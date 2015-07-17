export default () => {
	App.View('Options', 'Categories', {
		init: function() {
			this.currentCategory = blocks.observable(this.categories[0].slug);
		},
		categories: [
			{
				title: 'Код',
				slug: 'code'
			},
			{
				title: 'Личное',
				slug: 'private'
			}
		],
		changeCategory: function(e) {
			var category = blocks.context(e.target).$this;
			this.currentCategory(category.slug);
		}
	});
}