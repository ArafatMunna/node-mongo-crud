const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const app = express();
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());

//user:dbuser1
//password:6JSSOumDWBbfAt3L

const uri =
    "mongodb+srv://dbuser1:6JSSOumDWBbfAt3L@cluster0.hwd3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

async function run() {
    try {
        await client.connect();
        const userCollection = client.db("foodExpress").collection("user");

        //Get Users
        app.get("/user", async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        });

        //Get user (single user)
        app.get("/user/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await userCollection.findOne(query);
            res.send(result);
        });

        //POST User: Add a new user
        app.post("/user", async (req, res) => {
            const newUser = req.body;
            console.log("Adding New User", newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        });

        //PUT User: Update User
        app.put("/user/:id", async (req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;

            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };

            const updatedDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email,
                },
            };
            const result = await userCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });

        //Delete a user
        app.delete("/user/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };

            const result = await userCollection.deleteOne(query);
            res.send(result);
        });
    } finally {
    }
}

run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Running my node CRUD server");
});

app.listen(port, () => {
    console.log("Listening to port", port);
});
