import { Client, Databases } from "appwrite";
import config from "./config";

const client = new Client()
  .setEndpoint(config.appwriteURL)
  .setProject(config.projectID);

const databases = new Databases(client);

const createBio = async ({ bio }) => {
  try {
    return await databases.createDocument(
      config.bioDatabaseID,
      config.collectionID
    );
  } catch (error) {
    console.log("Appwrite service :: error in creating bio");
  }
};

const updateBio = async () => {
  try {
    return await databases.updateDocument(
      config.bioDatabaseID,
      config.collectionID
      // document id
    );
  } catch (error) {
    console.error("appwrite service :: updateBlogs", error);
    return false;
  }
};

export { createBio, updateBio };
