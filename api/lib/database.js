import lowDb from "lowdb";
import path from "path";
import storage from "lowdb/file-async";
import underscoreDb from "underscore-db";

const db = lowDb(
    path.join(__dirname, "../data/database.json"),
    { storage }
);

db._.mixin(underscoreDb);

export default db;
