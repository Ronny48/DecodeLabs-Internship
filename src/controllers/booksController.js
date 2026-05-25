const books = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    description:
      "A classic guide to software craftsmanship and practical programming principles.",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    description:
      "Teaches how to write readable, maintainable, and professional code.",
  },
  {
    id: 3,
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    description:
      "Deep dive into JavaScript core mechanics and tricky concepts.",
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "Explains how small habits compound into massive personal growth.",
  },
  {
    id: 5,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    description:
      "Modern systems design, databases, and distributed architecture explained clearly.",
  },
  {
    id: 6,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    description:
      "A beginner-friendly yet deep introduction to JavaScript and programming.",
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "A philosophical story about following your dreams and destiny.",
  },
  {
    id: 8,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    description:
      "Lessons on money, investing, and financial independence mindset.",
  },
  {
    id: 9,
    title: "Refactoring",
    author: "Martin Fowler",
    description:
      "Techniques for improving existing code without changing its behavior.",
  },
  {
    id: 10,
    title: "Grokking Algorithms",
    author: "Aditya Bhargava",
    description:
      "A visual and simple introduction to algorithms and data structures.",
  },
];

export const getBooks = async (req, res) => {
  try {
    return res.status(200).json({ message: "Success", data: books });
  } catch (error) {
    return res.status(500).json({ message: "Error", data: [] });
  }
};

export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await books.find((book) => book.id === parseInt(id));
    if (!book) {
      return res.status(404).json({ message: "Book not found", data: null });
    }
    return res.status(200).json({ message: "Success", data: book });
  } catch (error) {
    return res.status(500).json({ message: "Error", data: null });
  }
};

export const addBook = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    if (!title || !author || !description) {
      return res
        .status(400)
        .json({ message: "All fields are required", data: null });
    }
    const newBook = {
      id: books.length + 1,
      title,
      author,
      description,
    };
    await books.push(newBook);
    return res.status(201).json({ message: "Book added", data: newBook });
  } catch (error) {
    return res.status(500).json({ message: "Error", data: null });
  }
};
