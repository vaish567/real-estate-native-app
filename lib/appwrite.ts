import {
    Client,
    Account,
    ID,
    Databases,
    OAuthProvider,
    Avatars,
    Query,
    Storage,
  } from "react-native-appwrite";

export const config = {
    platform: "com.jsm.restate",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();

client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);