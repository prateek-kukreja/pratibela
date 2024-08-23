import { Client, ID, Storage } from "appwrite";
import config from "./config";

const client = new Client()
  .setEndpoint(config.appwriteURL)
  .setProject(config.projectID);

const storage = new Storage(client);

const createImageFile = async (file) => {
  try {
    const response = await storage.createFile(
      config.bucketID,
      ID.unique(),
      file
    );

    return response;
  } catch (error) {
    console.error("appwrite service :: error in uploading image", error);
  }
};

const getFile = (fileUrl) => {
  try {
    const response = storage.getFileView(config.bucketID, fileUrl);
    return response;
  } catch (error) {
    console.error("appwrite service :: error in getting files", error);
  }
};

export { createImageFile, getFile };
