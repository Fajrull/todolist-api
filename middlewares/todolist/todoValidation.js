const todoValidation = (req, res, next) => {
  const { task } = req.body;

  if (!task) {
    res.status(400).send({
      messaage: "Field is not complete!",
      statusText: "Field is not complete!",
      statusCode: 400,
    });
  } else {
    next();
  }
};

module.exports = { todoValidation };
