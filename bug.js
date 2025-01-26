```javascript
// Incorrect usage of $inc operator
db.collection.updateOne({"_id":ObjectId("65356b424848484848484848")},{$inc:{counter:1}});
//This will increment the counter, but if it doesn't exist, it will create it and set it to 1.
```