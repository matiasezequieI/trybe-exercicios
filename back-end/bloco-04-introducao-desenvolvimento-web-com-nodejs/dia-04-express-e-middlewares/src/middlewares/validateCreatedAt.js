module.exports = (req, res, next) => {
  const { createdAt } = req.body.description;
  const DateRegex =
    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (!DateRegex.test(createdAt))
    return res
      .status(400)
      .json({ message: "O campo createdAt deve ter o formato 'dd/mm/aaaa'" });
  next();
};
