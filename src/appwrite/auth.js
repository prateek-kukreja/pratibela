import { Client, Account } from "appwrite";
import config from "./config";

const client = new Client()
  .setEndpoint(config.appwriteURL)
  .setProject(config.projectID);

const account = new Account(client);

const createAccount = () => {
  try {
    account.createOAuth2Session(
      "google",
      "http://localhost:5174/",
      "http://localhost:5174/failed"
    );
  } catch (error) {
    console.error("appwrite service :: failed to create new account", error);
  }
};

const getUser = async () => {
  try {
    const userData = await account.get();
    return userData;
  } catch (error) {
    console.error("appwrite service :: error in getting user", error);
  }
};

export { client, account, createAccount, getUser };
