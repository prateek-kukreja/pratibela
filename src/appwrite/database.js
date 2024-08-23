import { Client, Databases, ID, Query } from "appwrite";
import config from "./config";

const client = new Client()
  .setEndpoint(config.appwriteURL)
  .setProject(config.projectID);

const databases = new Databases(client);

const createBlog = async ({ imageId, title, content, authorId }) => {
  try {
    return await databases.createDocument(
      config.databaseID,
      config.collectionID,
      ID.unique(),
      { imageId, title, content, authorId }
    );
  } catch (error) {
    console.error("appwrite service :: error in creating blog", error);
    return false;
  }
};

const getBlog = async (blogId) => {
  try {
    return await databases.getDocument(
      config.databaseID,
      config.collectionID,
      blogId
    );
  } catch (error) {
    console.error("appwrite service :: error get blog", error);
    return false;
  }
};

const listBlog = async () => {
  try {
    const response = await databases.listDocuments(
      config.databaseID,
      config.collectionID,
      [Query.orderDesc()]
    );
    return response.documents;
  } catch (error) {
    console.error("appwrite service :: error in listing blogs:", error);
  }
};

const listUserBlog = async (currentUserId) => {
  try {
    const response = await databases.listDocuments(
      config.databaseID,
      config.collectionID,
      [Query.equal("authorId", currentUserId)]
    );
    return response.documents;
  } catch (error) {
    console.error("appwrite service :: error in listing user blogs:", error);
  }
};

const updateBlog = async (slug, { title, content }) => {
  try {
    return await databases.updateDocument(
      config.databaseID,
      config.collectionID,
      slug
    );
  } catch (error) {
    console.error("appwrite service :: updateBlogs", error);
    return false;
  }
};

const deleteBlog = async () => {
  try {
    return await databases.deleteDocument(
      config.databaseID,
      config.collectionID
    );
  } catch (error) {
    console.error("appwrite service :: deleteBlog", error);
    return false;
  }
};

export {
  client,
  databases,
  createBlog,
  getBlog,
  listBlog,
  listUserBlog,
  updateBlog,
  deleteBlog,
};
