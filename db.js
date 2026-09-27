import Database from "better-sqlite3";

const db = new Database("app.db");

/*
const query = `
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name STRING NOT NULL,
    username STRING NOT NULL UNIQUE
  )
`;

db.exec(query);
*/

/*
const data = [
  {name: "Caleb", username: "Calcur"},
  {name: "Brandy", username: "brand"},
  {name: "Eli", username: "eli123"}
];

const insertData = db.prepare("INSERT INTO users (name, username) VALUES (?, ?)");
data.forEach((user) => {
  insertData.run(user.name,user.username);
});
*/

/*
const query = "SELECT * FROM users";
const users = db.prepare(query).all();
console.log(users);
*/

/*
const user = db.prepare("SELECT * FROM users WHERE id = ?").get(1);
console.log(user);
*/

/*
const app = express();

app.get("/", (req,res) => {
  const query = "SELECT * FROM users";
  res.json(db.prepare(query).all());
});

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));
*/

//db.close();
