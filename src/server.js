import express from "express";
import dotenv from "dotenv";
import books from "./routes/bookRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});

app.use("/api/books", books);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
    Server is running on port ${PORT}
    http://localhost:${PORT}
    `);
});
