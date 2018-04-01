// Run through the mongo shell.
// Prepare csv file for import into mongo.
// Use papaparse

// 1. Check for duplicates. (same id) - imported data uses Animal_ID as unique.
// Mongo will have _id as the primary key but also Animal_ID as a unique field.

// Read csv into string/array > store Animal_ID in hash/array, if a value exists, delete (or show to me to check if this works)

// 2. Delete duplicates

// 3. Rename Animal_ID to _id

// 4. Either replace file inputted or create new file. (maybe give option)

// Try to use node to write.

var import_file = "pets.csv";
var fs = require('fs')
print("\nImporting Dataset: " + import_file + "\nDatabase: " + db.getName() + "\nVersion: " + db.version());
