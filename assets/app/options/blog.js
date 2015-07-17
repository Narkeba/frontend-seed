export default () => {
	App.View('Options', 'BlogCategories', {
		categories: [
			{
				title: 'Код',
				slug: 'code'
			}
		]
	});
}