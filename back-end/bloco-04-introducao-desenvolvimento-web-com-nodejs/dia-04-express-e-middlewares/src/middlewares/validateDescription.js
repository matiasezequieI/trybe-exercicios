module.exports = (req, res, next) => {
  const { description } = req.body;
  if (!description)
    return res
      .status(400)
      .json({ message: 'O campo description é obrigatório' });

  if (!('createdAt' in description))
    return res.status(400).json({ message: 'O campo createdAt é obrigatório' });

  if (!('rating' in description))
    return res.status(400).json({ message: 'O campo rating é obrigatório' });

  if (!('difficulty' in description))
    return res
      .status(400)
      .json({ message: 'O campo difficulty é obrigatório' });

  next();
};
