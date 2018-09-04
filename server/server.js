var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo=mongoose.model(`Todo`,{
	text:{
		type: String
	},
	completed:{
		type: Boolean
	},
	completedAt:{
		type: Number
	}
});

// var newTodo= new Todo({
// 	text: 'Cook dinner'
// });

// newTodo.save().then((doc)=>{
// 	console.log('Saved toco', doc);
// }, (e)=>{
// 	console.log('Unable to save todo')
// });
var secTodo= new Todo({
	text: 'Go to gym',
	completed: true,
	completedAt: 2,

});

secTodo.save().then((doc)=>{
	console.log('Saved toco', doc);
}, (e)=>{
	console.log('Unable to save todo')
});