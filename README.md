# MongoDB $inc operator bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numerical field by a specified value. However, if the field doesn't exist, it will not throw an error. Instead, it will create the field and set it to the specified value. This can lead to unexpected results and difficult to debug.

## Bug
The bug is in the following line of code:
```javascript
db.collection.updateOne({"_id":ObjectId("65356b424848484848484848")},{$inc:{counter:1}});
```
This code attempts to increment the `counter` field by 1. However, if the `counter` field doesn't exist, it will be created and set to 1. This can lead to unexpected results if the initial value of the counter is important.

## Solution
The solution is to use the `$setOnInsert` operator along with `$inc`. This will ensure that the `counter` field is only incremented if it already exists. If it doesn't exist, it will not be created.
```javascript
db.collection.updateOne({"_id":ObjectId("65356b424848484848484848")},{"$inc":{"counter":1},"$setOnInsert":{"counter":1}});
```