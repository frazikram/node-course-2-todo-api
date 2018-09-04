// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
	if(err)
	{
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	const db=client.db('TodoApp');
	//delete many
	// db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
	// 		console.log(result);
	// });
	//deleteOne
	// db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
	// 	console.log(result);
	// })
	//findoneAndDelete
	// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	// 	console.log(result);
	// })
	// db.collection('Users').deleteMany({name:'Fraz Ikram'});
	db.collection('Users').findOneAndDelete({_id:new ObjectID('5b8ae3b4795a211f15f02d8c')}).then((results)=>{
		console.log(JSON.stringify(results,undefined, 2));
	});
	//client.close();
});