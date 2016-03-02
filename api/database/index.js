import low from "lowdb";
import storage from "lowdb/file-async";

export default low("./data.json", { storage });
