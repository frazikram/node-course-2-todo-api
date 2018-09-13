const{ObjectID}= require('mongodb');

const{mongoose}= require('./../server/db/mongoose');
const{Todo}= require('./../server/models/todo');
const{User}=require('./../server/models/users');

// var id ='5b956c16a8ea7c2d944e2d3f';

// if(!ObjectID.isValid(id)){
// 	console.log('ID not Valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('Todos',todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
// 	if(!todo)
// 	{
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo by ID',todo);
// }).catch((e)=> console.log(e));
User.findById('5b8ec9c410cd960b947f2af1').then((user)=>{
	if(!user)
	{
		return console.log('Unableto find user');
	}
	console.log(JSON.stringify(user,undefined,2));
}, (e)=>{
	console.log(e);
});