router.get('/api/books', async (req, res) => {
  try {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const books = await Book.find().skip(offset).limit(limit);

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
