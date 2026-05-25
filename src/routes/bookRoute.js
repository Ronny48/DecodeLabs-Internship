import { Router } from "express";
import { getBooks, getBook, addBook } from "../controllers/booksController.js";

const books = Router();

books.get("/", getBooks);

books.get("/:id", getBook);

books.post("/", addBook);

export default books;
