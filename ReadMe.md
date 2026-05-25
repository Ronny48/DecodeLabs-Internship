# Project0

A simple Express.js API for managing a collection of books.

## Features

- Get all books
- Get a single book by ID
- Add a new book
- Lightweight local development stateless server

## Project Structure

- `src/server.js` — starts the Express server and mounts the routes
- `src/routes/bookRoute.js` — defines the `/api/books` routes
- `src/controllers/booksController.js` — contains the route handlers for reading and creating books
- `src/API_Test/api.http` — sample HTTP requests for testing the API

## Prerequisites

- Node.js (v18 or later recommended)
- npm

## Installation

```bash
npm install
```

## Run the server

```bash
cp .env.example .env
```

```bash
npm start
```

By default, the server runs on port `5000`.

You can also set a custom port with an environment variable:

```bash
PORT=8080 npm start
```

And then you edit the port

## API Endpoints

### GET /

Returns a welcome message.

### GET /api/books

Returns all books in the collection.

### GET /api/books/:id

Returns a single book by its numeric ID.

### POST /api/books

Creates a new book.

#### Request body

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "description": "A Handbook of Agile Software Craftsmanship"
}
```

## Example Requests

### List all books

```http
GET http://localhost:5000/api/books
```

### Get one book

```http
GET http://localhost:5000/api/books/3
```

### Add a new book

```http
POST http://localhost:5000/api/books
Content-Type: application/json

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "description": "A Handbook of Agile Software Craftsmanship"
}
```

## Notes

- The in-memory book list is initialized in `src/controllers/booksController.js`.
- Data is not persisted to disk.
- The API uses `express.json()` so JSON request bodies are parsed automatically.
