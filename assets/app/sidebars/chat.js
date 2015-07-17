import Message from '../models/message.js';

var Messages = App.Collection(Message);
var messagesData = [
	{
		author: 'Dordevic',
		message: 'privet!'
	},
	{
		author: 'Dordevic',
		message: 'poka!'
	}
];

export default () => {
	App.View('Sidebar', 'Chat', {
		slug: 'chat',
		newMessage: Message(),
		messages: Messages(messagesData)
	});
}