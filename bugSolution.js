```javascript
// Correct usage of $inc and $setOnInsert operator
db.collection.updateOne({"_id":ObjectId("65356b424848484848484848")},{"$inc":{"counter":1},"$setOnInsert":{"counter":0}});
//This will increment the counter if it exists. If it doesn't exist, it will create it and set it to 0.
```