db.createCollection("myCollection");

db.myCollection.drop();

db.myCollection.insertOne({
    name: "John Doe",
    age: 30,
    city: "New York"
});

db.myCollection.deleteOne({ name: "John Doe" });
