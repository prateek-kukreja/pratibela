const express = require("express");
const sdk = require("node-appwrite");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const client = new sdk.Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_USER_DATA_ACCESS_API_KEY);

const user = new sdk.Users(client);

app.get("/users", async (req, res) => {
  try {
    const result = await user.list();
    res.json(result.users);
  } catch (error) {
    res.status(500).send("error listing users");
  }
});

app.listen(port, () => {
  console.log("listening to the port", port);
});
