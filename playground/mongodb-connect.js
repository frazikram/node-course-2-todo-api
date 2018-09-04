// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
	if(err)
	{
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	const db=client.db('TodoApp')

	// db.collection('Todos').insertOne(
	// {
	// 	text:'Eat Lunch',
	// 	completed: true
	// },(err, result)=>{
	// 	if(err)
	// 	{
	// 		return console.log('Unable to insert todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	// db.collection('Users').insertOne(
	// {	
	// 	name:'Fraz Ikram',
	// 	age: 22,
	// 	location: 'Boston'
	// },(err, result)=>{
	// 	if(err)
	// 	{
	// 		return console.log('Unable to insert User',err);
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });
	client.close();
});