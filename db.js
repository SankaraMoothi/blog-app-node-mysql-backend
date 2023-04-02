import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();
export const db = mysql2.createConnection(process.env.DB_URL);
