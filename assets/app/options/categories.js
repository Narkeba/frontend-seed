import Category from '../models/category.js';

var Categories = App.Collection(Category);
var categoriesData = [
	{
		title: 'Код',
		slug: 'code'
	},
	{
		title: 'Личное',
		slug: 'private'
	}
];

export default () => {
	App.View('Options', 'Categories', {
		categories: Categories(categoriesData),
		currentCategory: blocks.observable(0),
		getCategory: blocks.observable(function() {
			return this.categories()[this.currentCategory];
		}),
		changeCategory: function(e, categoryIndex) {
			this.currentCategory(categoryIndex);
		}
	});
}