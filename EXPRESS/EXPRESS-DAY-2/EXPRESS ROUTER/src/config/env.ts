import "dotenv/config";

export const PORT = Number(process.env.PORT) || 3000;
export const APP_NAME = process.env.APP_NAME || "My App";
