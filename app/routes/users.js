router.get('/api/users', async (req, res) => {
  try {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const users = await User.find().skip(offset).limit(limit);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
