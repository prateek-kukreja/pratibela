const config = {
  appwriteURL: String(import.meta.env.VITE_REACT_APP_APPWRITE_ENDPOINT),

  projectID: String(import.meta.env.VITE_REACT_APP_APPWRITE_PROJECT_ID),

  databaseID: String(import.meta.env.VITE_REACT_APP_APPWRITE_DATABASE_ID),

  collectionID: String(import.meta.env.VITE_REACT_APP_APPWRITE_COLLECTION_ID),

  bucketID: String(import.meta.env.VITE_REACT_APP_APPWRITE_BUCKET_ID),

  apiKey: String(import.meta.env.VITE_REACT_APP_APPWRITE_API_KEY),
};

export default config;
